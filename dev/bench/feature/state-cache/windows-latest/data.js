window.BENCHMARK_DATA = {
  "lastUpdate": 1679888617239,
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
          "id": "0c671e16f82fa186b33d165e1cc535f621434a0a",
          "message": "Reintroduced cache during commit",
          "timestamp": "2023-03-27T12:20:31+09:00",
          "tree_id": "fe738e78b4353bc36fcbc3b06b14e8466f83bfd4",
          "url": "https://github.com/greymistcube/libplanet/commit/0c671e16f82fa186b33d165e1cc535f621434a0a"
        },
        "date": 1679888595066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99797.18309859154,
            "unit": "ns",
            "range": "± 4492.309995377367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894816.71875,
            "unit": "ns",
            "range": "± 17877.83943433054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510975.8091517857,
            "unit": "ns",
            "range": "± 2680.241356291512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173869.4270833333,
            "unit": "ns",
            "range": "± 6707.10639178014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646758.203125,
            "unit": "ns",
            "range": "± 8013.748340352782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829250.2580915178,
            "unit": "ns",
            "range": "± 1363.4826856304794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757101.6322544643,
            "unit": "ns",
            "range": "± 1006.8787109677985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4683866.354166667,
            "unit": "ns",
            "range": "± 32509.257543296502"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5649335.714285715,
            "unit": "ns",
            "range": "± 45427.145512903946"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25503294.594594594,
            "unit": "ns",
            "range": "± 863317.9290601099"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5887531.428571428,
            "unit": "ns",
            "range": "± 282623.7733432897"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28326555.555555556,
            "unit": "ns",
            "range": "± 529425.4135350247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99205.20833333333,
            "unit": "ns",
            "range": "± 11423.838140085722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191663.33333333334,
            "unit": "ns",
            "range": "± 13137.350903589542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176593,
            "unit": "ns",
            "range": "± 16754.443131493947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4017066.6666666665,
            "unit": "ns",
            "range": "± 73554.80625907137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8854835.714285715,
            "unit": "ns",
            "range": "± 92899.42955147255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22467,
            "unit": "ns",
            "range": "± 3234.506347672132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54091.11111111111,
            "unit": "ns",
            "range": "± 5686.642034449244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41192.55319148936,
            "unit": "ns",
            "range": "± 2737.286913657002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105252.22222222222,
            "unit": "ns",
            "range": "± 14473.369406345375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6434.693877551021,
            "unit": "ns",
            "range": "± 886.7991835364373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24723.23232323232,
            "unit": "ns",
            "range": "± 3706.1677297976585"
          }
        ]
      }
    ]
  }
}