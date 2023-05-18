window.BENCHMARK_DATA = {
  "lastUpdate": 1684408385331,
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
          "id": "6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c",
          "message": "Removed t from Context and ConsensusContext",
          "timestamp": "2023-05-18T19:53:46+09:00",
          "tree_id": "66139e90fd004f391d5a5c9cff75f998c5569cf7",
          "url": "https://github.com/greymistcube/libplanet/commit/6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c"
        },
        "date": 1684408357987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505697.8260869565,
            "unit": "ns",
            "range": "± 101676.25629478726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866546.511627907,
            "unit": "ns",
            "range": "± 105051.41903993221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2442961.7021276597,
            "unit": "ns",
            "range": "± 206426.11326557456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6172311.956521739,
            "unit": "ns",
            "range": "± 344828.8018752543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53985.18518518518,
            "unit": "ns",
            "range": "± 2857.4512730364763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324000,
            "unit": "ns",
            "range": "± 144909.80749311726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23258135.714285713,
            "unit": "ns",
            "range": "± 151323.85473212416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57128039.28571428,
            "unit": "ns",
            "range": "± 1619520.0005258268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113135700,
            "unit": "ns",
            "range": "± 3259048.820372507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226823625,
            "unit": "ns",
            "range": "± 7407424.139233557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5631272.03125,
            "unit": "ns",
            "range": "± 66065.4872549658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847453.822544643,
            "unit": "ns",
            "range": "± 19658.851425036995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389099.8177083333,
            "unit": "ns",
            "range": "± 14060.176201822022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093487.0052083335,
            "unit": "ns",
            "range": "± 31956.720006116702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998983.6495535715,
            "unit": "ns",
            "range": "± 9380.726519839938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902745.4402043269,
            "unit": "ns",
            "range": "± 7120.527646164756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3537121.875,
            "unit": "ns",
            "range": "± 108332.85247515282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3794253.5714285714,
            "unit": "ns",
            "range": "± 162237.78840644058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562130.985915493,
            "unit": "ns",
            "range": "± 221707.419549504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4709821.818181818,
            "unit": "ns",
            "range": "± 188409.9103815039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7502002.173913044,
            "unit": "ns",
            "range": "± 288816.8589178428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295540.350877193,
            "unit": "ns",
            "range": "± 12822.272191791946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289078.26086956525,
            "unit": "ns",
            "range": "± 10950.959634123968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255742.1052631579,
            "unit": "ns",
            "range": "± 15353.505240833154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4639723.684210527,
            "unit": "ns",
            "range": "± 158617.34752986854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197540,
            "unit": "ns",
            "range": "± 74409.7996618341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21166.666666666668,
            "unit": "ns",
            "range": "± 1498.5386139596437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97489.36170212766,
            "unit": "ns",
            "range": "± 7748.66576215359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84213.82978723405,
            "unit": "ns",
            "range": "± 6753.471446068801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100972.34042553192,
            "unit": "ns",
            "range": "± 15196.146966766035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6038.144329896907,
            "unit": "ns",
            "range": "± 922.6821521802024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20344.68085106383,
            "unit": "ns",
            "range": "± 1798.0644923233724"
          }
        ]
      }
    ]
  }
}