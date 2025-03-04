import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Roles, User, UserProfile } from '@iote/bricks';
import { Logger, ToastService } from '@iote/bricks-angular';
import { AuthEnvironment } from '@iote/cqrs';
import {
  ActionCodeSettings,
  AuthProvider,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordMain,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  User as FBUser,
} from '@firebase/auth';
import { firebaseApp } from '../../utilities/firebaseApp';

/**
 * Authentication Service
 *
 * @see https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private _logger: Logger,
    private _toastService: ToastService,
    @Inject('ENVIRONMENT') private _env: AuthEnvironment
  ) {}

  public async resetPassword(email: string, langCode: string = 'en') {
    this.getAuth().languageCode = langCode;

    const actionCodeSettings: ActionCodeSettings = {
      url: this._env.baseUrl,
    };

    return sendPasswordResetEmail(getAuth(), email, actionCodeSettings);
    //.then(() => this._toastService.doSimpleToast('A password reset link has been sent to your email address.'))
    //.catch(() => this._toastService.doSimpleToast('An error occurred while attempting to reset your password. Please
    // contact support.'));
  }

  public createUserWithEmailAndPassword(
    displayName: string,
    email: string,
    password: string,
    userProfile: UserProfile,
    roles: Roles
  ) {
    return createUserWithEmailAndPasswordMain(getAuth(), email, password)
      .then((res) => {
        this._checkUpdateUserData(res.user, displayName, userProfile, roles);
        return <User>(<unknown>res.user);
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  public async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    return signInWithEmailAndPassword(this.getAuth(), email, password)
      .then(() => {
        this._logger.log(
          () =>
            `AuthService.signInWithEmailAndPassword: Successfully logged user in with Email and Password.`
        );
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  /* The function sets session persistence provided that the rememberMe value is true or false. */
  public setLoginSessionPersistence(rememberMe: boolean) {
    setPersistence(this.getAuth(), rememberMe ? 'LOCAL' : ('SESSION' as any));
  }

  public loadGoogleLogin(userProfile?: UserProfile, roles?: any) {
    this._logger.log(
      () => `AuthService.loadGoogleLogin: Logging in User via Google.`
    );

    const provider = new GoogleAuthProvider();
    return this._oAuthLogin(provider, userProfile, roles);
  }

  public loadFacebookLogin(userProfile?: UserProfile, roles?: any) {
    this._logger.log(
      () => `AuthService.loadFacebookLogin: Logging in User via Facebook.`
    );

    const provider = new FacebookAuthProvider();
    return this._oAuthLogin(provider, userProfile, roles);
  }

  public loadMicrosoftLogin(userProfile?: UserProfile, roles?: any) {
    this._logger.log(
      () => `AuthService.loadMicrosoftLogin: Logging in User via Microsoft.`
    );

    const provider = new OAuthProvider('microsoft.com');
    return this._oAuthLogin(provider, userProfile, roles);
  }

  signOut(route?: string) {
    return this.getAuth()
      .signOut()
      .then(() => {
        this.router.navigate([route ?? '/']);
      });
  }

  private getAuth() {
    return getAuth(firebaseApp);
  }

  private async _oAuthLogin(
    provider: AuthProvider,
    userProfile?: UserProfile,
    roles?: any
  ) {
    return signInWithPopup(this.getAuth(), provider)
      .then((credential) => {
        this._logger.log(() => 'Successful firebase user sign in');

        this._checkUpdateUserData(
          credential.user,
          null as any,
          userProfile,
          roles
        );
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  private _checkUpdateUserData(
    user: FBUser | null,
    inputDisplayName?: string,
    userProfile?: UserProfile,
    roles?: Roles
  ): void {
    if (!user) {
      // tslint:disable-next-line:no-string-throw
      throw 'Unable to save new user. User Registration failed.';
    }

    this._logger.log(
      () =>
        `AuthService._updateUserData: Getting DB User Ref for uid ${user.uid}.`
    );
    // Get user collection
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    // Check if initial user build has already been created
    userRef.get().subscribe((u) => {
      // If this is the first time the user logs in, create an initial firestore record for the user.
      if (!u.exists) {
        const data: any = {}; // Actual Type: User

        if (user.email) {
          data.email = user.email;
        }
        if (user.photoURL) {
          data.photoUrl = user.photoURL;
        }
        if (user.phoneNumber) {
          data.phoneNumber = user.phoneNumber;
        }

        if (user.displayName) {
          data.displayName = user.displayName;
        } else {
          data.displayName = inputDisplayName;
        }

        data.profile = userProfile ? userProfile : {};
        if (user.email) {
          data.profile.email = user.email;
        }
        data.roles = roles ? roles : { access: true, app: true };

        data.uid = user.uid;
        data.id = user.uid;

        data.createdOn = new Date();
        data.createdBy = 'AuthService';
        data.isNew = true;

        // Add new user to collection. Set isNew hook for projects to build on.
        userRef.set(data);
      }
    });
  }

  private _throwError(error: any) {
    const errorCode = error.code;
    this._logger.error(() => error);

    // TODO: Multi Language
    if (errorCode === 'auth/account-exists-with-different-credential') {
      // TODO: Handle linking the user's accounts here.
      this._toastService.doSimpleToast(
        'You have already signed up with a different provider (Direct Login / Google / Facebook / ..) for that email.',
        3000
      );
    } else if (errorCode === 'auth/auth-domain-config-required') {
      this._toastService.doSimpleToast(
        'An auth domain configuration is required. Please contact support.',
        3000
      );
    } else if (errorCode === 'auth/operation-not-allowed') {
      this._toastService.doSimpleToast(
        'Action failed. Please contact support. Code: ONA',
        3000
      );
    } else if (
      errorCode === 'auth/operation-not-supported-in-this-environment'
    ) {
      this._toastService.doSimpleToast(
        'Action failed. Please contact support. Code: ONSITE',
        3000
      );
    } else if (errorCode === 'auth/popup-blocked') {
      this._toastService.doSimpleToast(
        'Action failed. Please contact support. Code: POPBLOCK',
        3000
      );
    } else if (errorCode === 'auth/unauthorized-domain') {
      this._toastService.doSimpleToast(
        'Action failed. Please contact support. Code: DOMA',
        3000
      );
    } else if (
      errorCode === 'auth/cancelled-popup-request' ||
      errorCode === 'auth/popup-closed-by-user'
    ) {
      // Do nothing. User cancelled him or herself.
      this._toastService.doSimpleToast('Popup sign in was canceled');
    } else {
      const errorMsg = `Login failed. Please try again. If this error persists, contact support. Code ${error.code}`;
      this._toastService.doSimpleToast(errorMsg, 3000);
    }
  }
}
