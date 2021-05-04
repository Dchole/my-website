import groups from "./links/groups";

const Links = () => {
  return (
    <div className="container max-w-screen-md m-auto grid grid-cols-3 mb-12">
      {groups.map(({ title, group, align }) => (
        <div key={align}>
          <h3 className={`text-2xl ${align} font-headline font-semibold mb-3`}>
            {title}
          </h3>
          <ul className="space-y-2">
            {group.map(({ url, name }) => (
              <li className={`${align}`} key={name}>
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-body tracking-body"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
