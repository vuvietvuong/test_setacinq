# Python code to demonstrate working of unittest 
import unittest 
import numpy as np
from matrix_inversion import matrix_inversion

class TestStringMethods(unittest.TestCase):
    """Sample test case"""
    test_case = []
    expected_output = []
    # Setting up for the test
    def setUp(self):
        matrix = np.array([[1,2,3,4],[4,5,6,7],[7,8,9,10]])
        expect = np.array([[10,9,8,7],[7,6,5,4],[4,3,2,1]])
        self.test_case.append(matrix)
        self.expected_output.append(expect)
    
    # Cleaning up after the test
    def tearDown(self):
        pass

    # Returns True if the string contains 6 a. 
    def test_matrix_inversion(self): 
        for i in range(len(self.test_case)):
            comparation = (matrix_inversion(self.test_case[i]) == self.expected_output[i]).all()
            self.assertEqual(comparation, True)
  
if __name__ == '__main__': 
    unittest.main() 