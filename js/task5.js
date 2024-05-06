function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof ErrorException) {
      throw error; 
    } else if (error instanceof NotificationException) {
      return reliableMultiply(a, b)
    } else {
      throw error;
    }
  }
}