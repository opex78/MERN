import { render, screen } from "@testing-library/react"
import { mock_restaurants } from "../../Constants"
import { RestaurantCard } from "../RestaurantCard"
import "@testing-library/jest-dom"

it("Should render Restaurant card component with props", () => {
    const restaurant = mock_restaurants[0];
    render(
        <RestaurantCard name={restaurant.info.name}
            ratings={`${restaurant.info.avgRatingString} stars`}
            cuisines={restaurant.info.cuisines.join(", ")}
            deliveryTime={restaurant.info.sla.slaString}
            imageId={restaurant.info.cloudinaryImageId} />);

    // Query
    const cardName = screen.getByText("Sandwich N Shakes");

    // Assert   
    expect(cardName).toBeInTheDocument();
})

