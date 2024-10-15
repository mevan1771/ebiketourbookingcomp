import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  name: string;
  email: string;
  numberOfPeople: number;
  startDate: string;
  numberOfDays: number;
}

interface TourActivity {
  id: string;
  name: string;
  category: string;
}

interface TourState {
  userInfo: UserInfo;
  selectedActivities: TourActivity[];
}

const initialState: TourState = {
  userInfo: {
    name: '',
    email: '',
    numberOfPeople: 1,
    startDate: '',
    numberOfDays: 1,
  },
  selectedActivities: [],
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    addActivity: (state, action: PayloadAction<TourActivity>) => {
      state.selectedActivities.push(action.payload);
    },
    removeActivity: (state, action: PayloadAction<string>) => {
      state.selectedActivities = state.selectedActivities.filter(
        (activity) => activity.id !== action.payload
      );
    },
    reorderActivities: (state, action: PayloadAction<TourActivity[]>) => {
      state.selectedActivities = action.payload;
    },
  },
});

export const { setUserInfo, addActivity, removeActivity, reorderActivities } = tourSlice.actions;

export default tourSlice.reducer;