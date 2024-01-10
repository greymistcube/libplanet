window.BENCHMARK_DATA = {
  "lastUpdate": 1704870509060,
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
          "id": "62240d10330c147e4ada92b787ce0d35985adac1",
          "message": "Updated changelog",
          "timestamp": "2024-01-10T15:54:01+09:00",
          "tree_id": "4f1cc9e9cdd7817b323f20fb67af5ad2931a41b8",
          "url": "https://github.com/greymistcube/libplanet/commit/62240d10330c147e4ada92b787ce0d35985adac1"
        },
        "date": 1704870493017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8090279.8,
            "unit": "ns",
            "range": "± 121268.93678173084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21392571.5,
            "unit": "ns",
            "range": "± 364391.66659278754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50933961.96666667,
            "unit": "ns",
            "range": "± 2243905.7435723734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107377683.53389831,
            "unit": "ns",
            "range": "± 4728958.893221475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195316925.08333334,
            "unit": "ns",
            "range": "± 4399774.471502423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48445.98936170213,
            "unit": "ns",
            "range": "± 11165.051283650797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259252.9347826087,
            "unit": "ns",
            "range": "± 24165.974943124966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247648.71276595743,
            "unit": "ns",
            "range": "± 32654.27731170822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229884.21578947367,
            "unit": "ns",
            "range": "± 36402.823390811594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249174.153846154,
            "unit": "ns",
            "range": "± 174704.3879271367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3576679.806451613,
            "unit": "ns",
            "range": "± 64351.32844545343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21639.266666666666,
            "unit": "ns",
            "range": "± 6838.317698039909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92644.90322580645,
            "unit": "ns",
            "range": "± 17148.248532103615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79915.27272727272,
            "unit": "ns",
            "range": "± 19237.06456234634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82043.22916666667,
            "unit": "ns",
            "range": "± 14903.740172382144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6290.969387755102,
            "unit": "ns",
            "range": "± 2069.046362353607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16414.617021276597,
            "unit": "ns",
            "range": "± 5234.0605551293465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077162,
            "unit": "ns",
            "range": "± 99417.68355497677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2244433.4206349207,
            "unit": "ns",
            "range": "± 99954.5804361712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739666.0947368422,
            "unit": "ns",
            "range": "± 101700.64622601375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18663566.606741574,
            "unit": "ns",
            "range": "± 1849655.6489306798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3050940.339285714,
            "unit": "ns",
            "range": "± 130534.65093366473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3138568.970149254,
            "unit": "ns",
            "range": "± 147985.27234563313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3792961.125,
            "unit": "ns",
            "range": "± 111472.655476651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3897015.8372093025,
            "unit": "ns",
            "range": "± 142364.11875270668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24180806.963157896,
            "unit": "ns",
            "range": "± 3793127.2182704783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517894.203776042,
            "unit": "ns",
            "range": "± 112830.56381384816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1449428.7472149883,
            "unit": "ns",
            "range": "± 49994.145241880055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 912952.0391927083,
            "unit": "ns",
            "range": "± 7938.720652217407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987231.7442908655,
            "unit": "ns",
            "range": "± 19375.521823483443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 668324.564546131,
            "unit": "ns",
            "range": "± 15841.561480511153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564620.7188197544,
            "unit": "ns",
            "range": "± 7265.736480419086"
          }
        ]
      }
    ]
  }
}