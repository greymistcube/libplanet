window.BENCHMARK_DATA = {
  "lastUpdate": 1688713172318,
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
          "id": "c37b35e24d3b2dbe5d84caed9104cd77a4d5835a",
          "message": "Removed all getters",
          "timestamp": "2023-07-07T15:45:31+09:00",
          "tree_id": "a96da9c51e476c1f685c53e176dbe6ee9b5516f7",
          "url": "https://github.com/greymistcube/libplanet/commit/c37b35e24d3b2dbe5d84caed9104cd77a4d5835a"
        },
        "date": 1688713164934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292278.875,
            "unit": "ns",
            "range": "± 8212.4272540599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281950.82352941175,
            "unit": "ns",
            "range": "± 10176.925466379093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249042.9411764706,
            "unit": "ns",
            "range": "± 7065.561132539089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4641666.214285715,
            "unit": "ns",
            "range": "± 27191.499523475435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4040610.214285714,
            "unit": "ns",
            "range": "± 63049.67034035525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19504.484210526316,
            "unit": "ns",
            "range": "± 1384.1608400511188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89840.37234042553,
            "unit": "ns",
            "range": "± 5820.11185641326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73511.36842105263,
            "unit": "ns",
            "range": "± 1510.2273636967643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92184.77551020408,
            "unit": "ns",
            "range": "± 13629.322854597654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5074.041666666667,
            "unit": "ns",
            "range": "± 707.4782483792874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17460.6875,
            "unit": "ns",
            "range": "± 1277.8627742198464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588430.855670103,
            "unit": "ns",
            "range": "± 101184.65887116872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991227.027777778,
            "unit": "ns",
            "range": "± 146593.548031453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975758.0579710144,
            "unit": "ns",
            "range": "± 94836.12835165659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5261569.15,
            "unit": "ns",
            "range": "± 183870.53841913072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955783.089583334,
            "unit": "ns",
            "range": "± 54450.183855297786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935466.6283482143,
            "unit": "ns",
            "range": "± 2410.9198479798915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391971.015625,
            "unit": "ns",
            "range": "± 3775.5382562325804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674100.74375,
            "unit": "ns",
            "range": "± 2158.1673765082296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882053.3229817708,
            "unit": "ns",
            "range": "± 641.36347431162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771800.3392427885,
            "unit": "ns",
            "range": "± 389.73370597252637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468795.4857142856,
            "unit": "ns",
            "range": "± 113034.47165600084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3894371.4375,
            "unit": "ns",
            "range": "± 51655.87386408733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486864.434782608,
            "unit": "ns",
            "range": "± 110907.8706194823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302905.576923077,
            "unit": "ns",
            "range": "± 116702.38644660976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6896621.736842105,
            "unit": "ns",
            "range": "± 233442.0286340781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7944241.214285715,
            "unit": "ns",
            "range": "± 39971.88441157219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22886114.230769232,
            "unit": "ns",
            "range": "± 618634.0712268155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55914414.5882353,
            "unit": "ns",
            "range": "± 1072846.8556856716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111667206.93333334,
            "unit": "ns",
            "range": "± 1396063.4759410103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223566902.80952382,
            "unit": "ns",
            "range": "± 5224089.264101453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49864.90217391304,
            "unit": "ns",
            "range": "± 2944.506787408398"
          }
        ]
      }
    ]
  }
}