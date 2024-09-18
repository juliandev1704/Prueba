Ar=[ 5, 16, 6, 8, 0.5, 12321, -5]

def insertion(arreglo):
    """iteramos en el arreglo de la posicion inicial a la final"""
    for i in range(0,len(arreglo)):
        """tomamos el elemento en la posicion i"""
        key = arreglo[i]
        """comparamos cada elemento con los elementos antes de el"""
        j = i-1
        """mientras j sea mayor o igual a 0 y el elemento en la posicion j sea mayor que el elemento en la posicion i"""
        while j >=0 and key < arreglo[j] :
                j -= 1
        arreglo[j+1] = key
    return arreglo


print(insertion(Ar))