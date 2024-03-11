import '../assets/Css/dashboard.css';
function Dashboard() {
  // Dummy data for demonstration
  const userData = {
    username: 'John Doe',
    accountBalance: '$100',
    recentTransactions: [
      { id: 1, type: 'Recharge', amount: '$20', date: '2024-02-21' },
      { id: 2, type: 'Recharge', amount: '$30', date: '2024-02-10' },
      { id: 2, type: 'Recharge', amount: '$40', date: '2024-05-03' },
      { id: 2, type: 'Recharge', amount: '$10', date: '2024-06-07' },
      { id: 2, type: 'Recharge', amount: '$50', date: '2024-09-30' },
      { id: 3, type: 'Bill Payment', amount: '$150', date: '2024-02-19' }
    ]
  };

  return (
    <div className="dashboard">
      <div className="user-info">
        <h2>Welcome, {userData.username}!</h2>
        <p>Account Balance: {userData.accountBalance}</p>
      </div>
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userData.recentTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default Dashboard;
