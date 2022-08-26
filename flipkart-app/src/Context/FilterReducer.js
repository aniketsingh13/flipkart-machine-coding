export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "high-to-low":
      return { ...state, Sortby: action.type };
    case "low-to-high":
      return { ...state, Sortby: action.type };
      case "BRAND":
       const updatedBrand = state.brand.includes(action.payload) ? state.brand.filter((item)  => item !== action.payload) : [...state.brand,action.payload]
        return {...state,brand: updatedBrand}
        case "IDEAL":
            const udpatedIdeal=state.ideal.includes(action.payload) ? state.ideal.filter((item)  => item !== action.payload) : [...state.ideal,action.payload]
            return {...state,ideal: udpatedIdeal}
            case "SIZE":
                const updatedSize = state.size.includes(action.payload) ? state.size.filter((item)  => item !== action.payload) : [...state.size,action.payload]
                return {...state,size: updatedSize}
                case "CLEARALL":
                  return {
                    Sortby: "",
                    brand: [],
                    ideal: [],
                    size: []
                  }
    default:
      return state;
  }
};
