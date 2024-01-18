// user-profile.model.ts

export class UserProfile {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public age: number,
      public additionalName: string,
      public personType: string,
      public headLine: string,
      public currentPosition: string
      // Add other properties as needed
    ) {}
  }
  