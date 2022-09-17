Feature: Register a new User on Amazon Database

    #Test Case 1 - User add a new product to cart, but not finish the buy.

    Scenario: Register a new user
    Given user visit amazon web site
    When click for create my account
    Then account must be create with success