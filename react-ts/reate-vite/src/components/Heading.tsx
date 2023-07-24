type IProps = {
  title: string;
};

const Heading = ({ title }: IProps) => {
  return <h1>{title}</h1>;
};

export default Heading;
