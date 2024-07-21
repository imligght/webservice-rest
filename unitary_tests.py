import unittest
import requests

# Classe para testar o webservice
class TestWebService(unittest.TestCase):
    BASE_URL = "http://localhost:8000" # URL base do webservice

    # Aqui estão alguns testes de exemplo
    # Cada um testa um caso diferente
    def test_get(self):
        '''Testa se o endpoint / retorna status 200'''
        response = requests.get(self.BASE_URL + "/")
        self.assertEqual(response.status_code, 200)
        print("\n\nEndpoint: GET /")
        print("Status: ", response.status_code)
        print("Response: ", response.text)
        print("Test Status: ok\n")

    def test_valid_sum(self):
        '''Testa se a soma está sendo calculada corretamente'''
        response = requests.get(self.BASE_URL + "/soma", params={"num1": 1, "num2": 2})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"soma": 3})
        print("\n\nEndpoint: GET /soma")
        print("Parâmetros: num1 = 1, num2 = 2")
        print("Resultado: ", response.json())
        print("Status: ", response.status_code)
        print("Test Status: ok\n")

    def test_invalid_sum(self):
        '''Testa se o endpoint /soma retorna erro quando os parâmetros são inválidos'''
        response = requests.get(self.BASE_URL + "/soma", params={"num1": 1, "num2": "a"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"error": "Parametros invalidos"})
        print("\n\nEndpoint: GET /soma")
        print("Parâmetros: num1 = 1, num2 = 'a'")
        print("Resultado: ", response.json())
        print("Status: ", response.status_code)
        print("Test Status: ok\n")

    def test_missing_param(self):
        '''Testa se o endpoint /soma retorna erro quando um parâmetro está faltando'''
        response = requests.get(self.BASE_URL + "/soma", params={"num1": 1})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"error": "Parametros invalidos"})
        print("\n\nEndpoint: GET /soma")
        print("Parâmetros: num1 = 1, num2 = None")
        print("Resultado: ", response.json())
        print("Status: ", response.status_code)
        print("Test Status: ok\n")

if __name__ == "__main__":
    unittest.main(verbosity=2)
