import mockData from "../../test-data.json";

export const useFetch = () => {
  return { isLoading: false, serverError: false, apiData: mockData };
};
