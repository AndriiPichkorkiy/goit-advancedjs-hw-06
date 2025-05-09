/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  [key: string] : any
}

interface PageProps {
  title: string
}

class Component<T extends ComponentProps> {
  constructor (public props:T) {
  }
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};