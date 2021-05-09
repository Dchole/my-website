import groups from "./links/groups";
import { github } from "./links/social-media";

const Links = () => {
  return (
    <div className="container max-w-screen-md m-auto grid grid-cols-1 md:grid-cols-3">
      {groups.map(({ title, group, align }) => (
        <div key={align} className="mb-12">
          <h3
            className={`text-2xl text-center ${align} font-headline font-semibold mb-3`}
          >
            {title}
          </h3>
          <ul className="space-y-2">
            {group.map(({ url, name }) => (
              <li className={`text-center ${align}`} key={name}>
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-700 font-body tracking-body"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          {align === "md:text-center" && (
            <div className="my-5">
              <h4 className="text-xl text-center font-headline font-semibold mb-2">
                Github
              </h4>
              <ul className="space-y-2">
                {github.map(({ url, name }) => (
                  <li className="text-center" key={name}>
                    <a
                      href={`http://${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-700 font-body tracking-body"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;
