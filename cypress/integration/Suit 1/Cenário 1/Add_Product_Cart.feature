Feature: Adding Product to Cart

    #Test Case 1 - User add a new product to cart, but not finish the buy.

    Scenario: Add Product to Cart Success
    Given user visit amazon web site
    When choose the perfect product and add to cart
    Then the Product may add to cart