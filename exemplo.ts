class Singleton {
    private static instance: Singleton;
  
    private constructor() {} // Construtor privado
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  