export interface CompanyProps {
    id?: string;
    name: string;
    cnpj: string;
    address: string;
    number: string;
    cep:string;
    district: string;
    email: string;
  }
  
  export type CompanyContextType = {
    companies: CompanyProps[];
    filterEvent: (category: string) => void;
  };
