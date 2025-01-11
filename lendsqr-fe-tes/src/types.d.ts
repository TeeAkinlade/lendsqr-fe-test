declare global {
    type SubItem = {
      title: string;
    };
  
    type Section<T> = {
      title: string;
      subItems: T[];
    };
  
    type UserDetails = {
      username: string;
      organization: string;
      personalInformation: Section<SubItem>[];
      employment: Section<SubItem>[];
      social: Section<SubItem>[];
      Guarantor: Section<SubItem>[];
    };

    type Data = { 
      labels: string[]; 
      datasets: {
         label: string; 
         data: string[]; 
         backgroundColor: string[]; 
         borderWidth: number; 
         borderRadius: { 
          topLeft: number; 
          topRight: number; 
          bottomLeft: number; 
          bottomRight: number; 
        }; 
      borderSkipped: string; 
      maxBarThickness: number; 
      }[]; 
    }
  }
  
  export {};
  