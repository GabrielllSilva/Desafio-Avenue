describe('GET Weather', () => {
    it('Search and find the best Weather', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
            qs:{
                appid: 'b2a18d3a3b45aeb423a496adc879c68f',
                lat: '-23.2742',
                lon: '-47.3126'
            }
        }).then((response) => {
            // expect(response.body).to.equal(200)
            cy.log(response)
        })
    })
})