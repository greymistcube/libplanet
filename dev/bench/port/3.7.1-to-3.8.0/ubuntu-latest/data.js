window.BENCHMARK_DATA = {
  "lastUpdate": 1700544809050,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1",
          "message": "Merge tag '3.7.1' into port/3.7.1-to-3.8.0\n\nLibplanet 3.7.1",
          "timestamp": "2023-11-21T14:20:17+09:00",
          "tree_id": "3d17b59700923895a777cec17203c71dd9223b48",
          "url": "https://github.com/greymistcube/libplanet/commit/d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1"
        },
        "date": 1700544801692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199367.1224489796,
            "unit": "ns",
            "range": "± 6818.567235963912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195733.61764705883,
            "unit": "ns",
            "range": "± 6320.081404178013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169572.7857142857,
            "unit": "ns",
            "range": "± 4837.894586124735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119070.1666666665,
            "unit": "ns",
            "range": "± 29034.609298133117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2789806.5384615385,
            "unit": "ns",
            "range": "± 38169.493806388076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12435.945054945056,
            "unit": "ns",
            "range": "± 983.3560829304845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62655.885416666664,
            "unit": "ns",
            "range": "± 6706.700589504408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59814.38775510204,
            "unit": "ns",
            "range": "± 6276.104525754733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64789.30412371134,
            "unit": "ns",
            "range": "± 11834.533261321129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3245.6458333333335,
            "unit": "ns",
            "range": "± 648.3361048287851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14490.854166666666,
            "unit": "ns",
            "range": "± 2029.4277595273877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700367.309795673,
            "unit": "ns",
            "range": "± 26137.327069326104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202544.0286959135,
            "unit": "ns",
            "range": "± 5354.0313823911765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783575.1182338169,
            "unit": "ns",
            "range": "± 10469.885569077409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955837.1356026786,
            "unit": "ns",
            "range": "± 10150.304071926053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608739.7882486979,
            "unit": "ns",
            "range": "± 2923.4523765595623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561023.4859095982,
            "unit": "ns",
            "range": "± 1621.4439772288347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40843.22222222222,
            "unit": "ns",
            "range": "± 6061.835405281607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418245.6222222224,
            "unit": "ns",
            "range": "± 91443.29012545249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593350.2,
            "unit": "ns",
            "range": "± 48197.82384269469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3115546.4375,
            "unit": "ns",
            "range": "± 57707.14889794129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940431.769230769,
            "unit": "ns",
            "range": "± 136615.45976363836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6527116.516129033,
            "unit": "ns",
            "range": "± 172633.1177978067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5544451.214285715,
            "unit": "ns",
            "range": "± 60079.68933287825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14122208.333333334,
            "unit": "ns",
            "range": "± 92412.01377964622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37331225.307692304,
            "unit": "ns",
            "range": "± 173026.89979951316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74199896.5,
            "unit": "ns",
            "range": "± 417747.4122758779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150650545.69230768,
            "unit": "ns",
            "range": "± 459277.54245560936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948799.9239130435,
            "unit": "ns",
            "range": "± 74807.844476458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871317.0172413792,
            "unit": "ns",
            "range": "± 81697.23866374187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1367276.9361702127,
            "unit": "ns",
            "range": "± 101366.99295801726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682540.395833333,
            "unit": "ns",
            "range": "± 357496.18670877506"
          }
        ]
      }
    ]
  }
}