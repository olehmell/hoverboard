import { initialBlogState } from './blog/state';
import { initialDialogState } from './dialogs/state';
import { initialFeedbackState } from './feedback/state';
import { initialFiltersState } from './filters/state';
import { initialGalleryState } from './gallery/store';
import { initialNotificationState } from './notifications/state';
import { initialPartnersState } from './partners/state';
import { initialPreviousSpeakersState } from './previous-speakers/state';
import { initialRoutingState } from './routing/state';
import { initialScheduleState } from './schedule/state';
import { initialSessionsState } from './sessions/state';
import { initialSpeakersState } from './speakers/state';
import { initialSubscribeState } from './subscribe/state';
import { initialTeamState } from './team/state';
import { initialTicketsState } from './tickets/state';
import { initialToastState } from './toast/state';
import { initialUiState } from './ui/state';
import { initialUserState } from './user/state';
import { initialVideosState } from './videos/state';

export const initialState = {
  ui: initialUiState,
  routing: initialRoutingState,
  dialogs: initialDialogState,
  tickets: initialTicketsState,
  videos: initialVideosState,
  feedback: initialFeedbackState,
  blog: initialBlogState,
  partners: initialPartnersState,
  previousSpeakers: initialPreviousSpeakersState,
  speakers: initialSpeakersState,
  sessions: initialSessionsState,
  schedule: initialScheduleState,
  gallery: initialGalleryState,
  team: initialTeamState,
  user: initialUserState,
  subscribed: initialSubscribeState,
  toast: initialToastState,
  notifications: initialNotificationState,
  filters: initialFiltersState,
};
