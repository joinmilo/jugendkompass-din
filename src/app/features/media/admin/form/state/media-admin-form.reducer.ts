import { createReducer, on } from '@ngrx/store';
import { InfoMediaCategoryEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminFormActions } from './media-admin-form.actions';

export interface MediaAdminFormState {
  editMedia?: Maybe<MediaEntity>;
  categories?: Maybe<InfoMediaCategoryEntity[]>;
}

export const initialState: MediaAdminFormState = {
};

export const mediaAdminFormReducer = createReducer(
  initialState,

  on(
    MediaAdminFormActions.setCategories,
    (state, action): MediaAdminFormState => ({
      ...state, categories: action.categories
    })),

  on(
    MediaAdminFormActions.saved,
    MediaAdminFormActions.cancelled,
    (state): MediaAdminFormState => (
      { ...state, editMedia: undefined }
    )
  ),

);
