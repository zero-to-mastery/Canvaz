export const getDate = () => new Date();

export const getHours = () => getDate().getHours();

export const getMinutes = () => getDate().getMinutes();

export const getSeconds = () => getDate().getSeconds();

export const degreeToRadiant = (value) => value * Math.PI / 180;