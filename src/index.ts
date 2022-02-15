export class Sealed {
  private readonly sealed = Symbol();

  /**
   * This function cannot be overriden
   */

  protected open(): typeof this.sealed {
    return this.sealed;
  }
}

class A extends Sealed {
  public open() {
    return Sealed.sealed;
  }
}
