type CustomObject = {
    [key: string]: string | number | boolean;
};

export default interface IFormValues {
    [key: string]: string | number | CustomObject;
}
