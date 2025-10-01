import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  resetSelectedEmail,
  setTabSelected,
} from "../../store/slices/navigation";

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const tabSelected = useAppSelector((state) => state.navigation.tabSelected);
  const emails = useAppSelector((state) => state.emails.emails);

  const onTabSelect = (tabValue: string) => {
    dispatch(resetSelectedEmail());
    dispatch(setTabSelected(tabValue));
  };

  return {
    tabSelected,
    emails,
    onTabSelect,
  };
};
