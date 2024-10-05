export const OutReach = () => {
  const tableData = [
    {
      id: 1,
      based: "The Full Spectrum ",
      day: "Comming soon",
      host: "TBA ",
    },
    {
      id: 2,
      based: "-",
      day: "-",
      host: "- ",
    },
    {
      id: 3,
      based: "-",
      day: "-",
      host: "- ",
    },
  ];

  return (
    <div id="OutReach" className="container">
      <div
        className="hero__last-text"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <h2 className="text-center " style={{ marginBottom: "5rem" }}>
          Cartel Outreach
        </h2>
      </div>

      <div
        // className="m-1 p-1 m-sm-4 p-sm-4"
        className="p-1"
        style={{
          borderTop: "1px solid #FFFFFF",
          borderRadius: "10px",
        }}
      >
        <p id="OutReach-main-text">
          If you are interested in sponsorship opportunities or being a featured
          guest on one of our highly attended weekly X Spaces, then please shoot
          us a message on X, or send an email to thebasedcartel@gmail.com.
        </p>

        <table className="OutReach-table">
          <tr className="tableYellowData">
            <td>based</td>
            <td>
              Every Wednesday <span className="showOnlyLarge">@8PM EST</span>{" "}
            </td>
            <td>
              Hosted By{" "}
              <span className="showOnlyLarge">
                @thebasedcartel / @QuigleyNFT / @realrendr
              </span>{" "}
            </td>
          </tr>

          <tbody>
            {tableData.map((items, i) => {
              return (
                <tr
                  className={i % 2 === 0 ? "tableDarkData" : "tableYellowData"}
                  key={items.id}
                >
                  <td>{items.based}</td>
                  <td> {items.day} </td>
                  <td> {items.host} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
