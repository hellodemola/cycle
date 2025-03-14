interface allCyclesProps {
  allCycles: {
    lastPeriod: Date;
    fertilePeriod: {
      start: Date;
      end: Date;
    };
    ovulationDay: Date;
    nextPeriod: Date;
  };
}

export default function ResultCard({ allCycles }: allCyclesProps) {
  return (
    <div id="card">
      <h4>Result</h4>
      <table
        style={{
          width: "100%",
          textAlign: "left",
          border: "0.5px solid red",
          padding: "0.5em",
        }}
      >
        <thead>
          <tr style={{ background: "red", color: "white" }}>
            <th scope="col">Title</th>
            <th scope="col">Readable Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Last period</td>
            <td>{new Date(allCycles.lastPeriod).toDateString()}</td>
          </tr>
          <tr>
            <td>Today</td>
            <td>{new Date().toDateString()}</td>
          </tr>

          <tr>
            <td>Fertile period</td>
            <td>
              {new Date(allCycles.fertilePeriod.start).toDateString()} - <br />
              {new Date(allCycles.fertilePeriod.end).toDateString()}{" "}
            </td>
          </tr>
          <tr>
            <td>Ovulation</td>
            <td>{new Date(allCycles.ovulationDay).toDateString()}</td>
          </tr>

          <tr>
            <td>Next period</td>
            <td>{new Date(allCycles.nextPeriod).toDateString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
