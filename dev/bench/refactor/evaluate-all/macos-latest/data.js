window.BENCHMARK_DATA = {
  "lastUpdate": 1688535469129,
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
          "id": "a11fa8c295811e9017e6652a48cb5dbb577ca1c9",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:23:42+09:00",
          "tree_id": "499cc83aa3cb35299f3e9593348bc0dab9f54898",
          "url": "https://github.com/greymistcube/libplanet/commit/a11fa8c295811e9017e6652a48cb5dbb577ca1c9"
        },
        "date": 1688535456635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8045376.152173913,
            "unit": "ns",
            "range": "± 199810.6336611126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605003.875,
            "unit": "ns",
            "range": "± 356559.43851198687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47759405.733333334,
            "unit": "ns",
            "range": "± 474480.08307085326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96633843.46666667,
            "unit": "ns",
            "range": "± 830297.3094351605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198927309.7647059,
            "unit": "ns",
            "range": "± 3922914.654349931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55651.65555555555,
            "unit": "ns",
            "range": "± 4614.619804079719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309211.597826087,
            "unit": "ns",
            "range": "± 20161.084776468535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297621.9691358025,
            "unit": "ns",
            "range": "± 14937.542307125374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277862,
            "unit": "ns",
            "range": "± 17945.00204396463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4086539.1428571427,
            "unit": "ns",
            "range": "± 69076.89988351014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695861.533333333,
            "unit": "ns",
            "range": "± 43226.68506319194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16293.989583333334,
            "unit": "ns",
            "range": "± 1473.2485944140526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86852.72448979592,
            "unit": "ns",
            "range": "± 10000.884201920288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85199.95555555556,
            "unit": "ns",
            "range": "± 6185.471168070886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106052.53684210527,
            "unit": "ns",
            "range": "± 15762.101106573356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5893.520618556701,
            "unit": "ns",
            "range": "± 1041.6724831109088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16152.182795698925,
            "unit": "ns",
            "range": "± 1947.367509285942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616165.6958762887,
            "unit": "ns",
            "range": "± 183015.5222307341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911086.0508474577,
            "unit": "ns",
            "range": "± 116355.86449239777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080216.2777777778,
            "unit": "ns",
            "range": "± 157564.5005798277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5790941.836065574,
            "unit": "ns",
            "range": "± 233877.48904267378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190960.8305084747,
            "unit": "ns",
            "range": "± 117579.62226261426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3421264.2073170734,
            "unit": "ns",
            "range": "± 123341.37317811162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322847.346153846,
            "unit": "ns",
            "range": "± 170250.18002286812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798006.9066666667,
            "unit": "ns",
            "range": "± 190985.22580436745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6977973.5,
            "unit": "ns",
            "range": "± 215232.17146713255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6450848.2421875,
            "unit": "ns",
            "range": "± 19043.571443935994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934189.4744591345,
            "unit": "ns",
            "range": "± 4607.510501235587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271206.2532552083,
            "unit": "ns",
            "range": "± 8750.659296931746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2487562.094308036,
            "unit": "ns",
            "range": "± 9795.273328985082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835175.0502604167,
            "unit": "ns",
            "range": "± 10155.396898729981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763428.3810686384,
            "unit": "ns",
            "range": "± 3895.004645699233"
          }
        ]
      }
    ]
  }
}