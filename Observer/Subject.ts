import Observer from "./Observer";

interface Subject{
    registerObserver(o:Observer);
    removeObserver(o:Observer);
    notifyObservers();
}

export default Subject