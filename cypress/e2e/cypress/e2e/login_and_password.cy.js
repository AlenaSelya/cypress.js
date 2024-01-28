describe('Автотесты на форму логина и пароля', function () {
    it('Позитивный кейс на авторизацию', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    
    
        it('Восстановление пароля', function () {
             cy.visit('https://login.qa.studio/');
             cy.get('#forgotEmailButton').click();
             cy.get('#mailForgot').type('german@dolnikov.ru');
             cy.get('#restoreEmailButton').click();
             cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

            it('Негативный кейс на авторизацию (неверный пароль)', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio5');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })

               it('Негативный кейс на авторизацию(неверный логин)', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikovv.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })

               it('Негативный кейс на валидацию', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })

               it('Негативный кейс на валидацию', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })
        })