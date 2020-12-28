import numpy as np
matrix = np.array([[1,2,3],[4,5,6],[7,8,9]])
def matrix_inversion(matrix):
    matrix_invers = []
    a = matrix.shape
    row = a[0]
    col = a[1]
    for i in range(row-1,-1,-1):
        arr = []
        for j in range(col-1,-1,-1):
            arr.append(matrix[i][j])
        matrix_invers.append(arr)
    return matrix_invers

print(matrix_inversion(matrix))
