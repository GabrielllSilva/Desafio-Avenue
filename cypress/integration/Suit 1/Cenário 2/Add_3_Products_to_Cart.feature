Feature: Adding Product to Cart

    #Test Case 1 - User add a new product to cart, but not finish the buy.

    Scenario: Add 3 Products to Cart with Success
    Given user visit amazon web site
    When choose and add 3 products to cart
    Then the Product values must be correct in the cart