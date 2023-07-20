window.BENCHMARK_DATA = {
  "lastUpdate": 1689839849209,
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
          "id": "44bbbc01223ed47ee09dd0d2667ecd9c5166367d",
          "message": "Hide TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-20T16:39:16+09:00",
          "tree_id": "77f12de69d9e969b1c90fff7a2b3bfb978853b6c",
          "url": "https://github.com/greymistcube/libplanet/commit/44bbbc01223ed47ee09dd0d2667ecd9c5166367d"
        },
        "date": 1689839822123,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9255316.2,
            "unit": "ns",
            "range": "± 142731.642153178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24883519.766666666,
            "unit": "ns",
            "range": "± 226506.678310712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60257795.46666667,
            "unit": "ns",
            "range": "± 576300.4960977844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119300962.46666667,
            "unit": "ns",
            "range": "± 1803329.9484139201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241571508.92307693,
            "unit": "ns",
            "range": "± 2850385.14255315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79933.9255319149,
            "unit": "ns",
            "range": "± 8894.808175462013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386794.1458333333,
            "unit": "ns",
            "range": "± 12036.811278085139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362224.4367816092,
            "unit": "ns",
            "range": "± 19058.744151811596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323201.55319148937,
            "unit": "ns",
            "range": "± 18185.905224980663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4850056.071428572,
            "unit": "ns",
            "range": "± 214447.62279202833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4475586.735294118,
            "unit": "ns",
            "range": "± 90578.39196417751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21185.505494505494,
            "unit": "ns",
            "range": "± 1769.7656553819425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98678.31914893616,
            "unit": "ns",
            "range": "± 7061.219345816762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119382.09090909091,
            "unit": "ns",
            "range": "± 9994.094617640214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115326.21739130435,
            "unit": "ns",
            "range": "± 12151.722506965325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6277.159574468085,
            "unit": "ns",
            "range": "± 840.3160606516242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20254.979166666668,
            "unit": "ns",
            "range": "± 1960.3939452605016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1972570.969387755,
            "unit": "ns",
            "range": "± 211706.68190553802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3643358.037735849,
            "unit": "ns",
            "range": "± 150960.07041802123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504114.65625,
            "unit": "ns",
            "range": "± 235922.1460214913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7144757.513513514,
            "unit": "ns",
            "range": "± 355152.7711775246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3971139.827586207,
            "unit": "ns",
            "range": "± 172206.69717220924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4254444.766666667,
            "unit": "ns",
            "range": "± 121542.86810682614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5306097.136363637,
            "unit": "ns",
            "range": "± 95803.66779900664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4934899.205882353,
            "unit": "ns",
            "range": "± 99109.25116113323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8584879.818181818,
            "unit": "ns",
            "range": "± 264542.84720750514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6817287.6890625,
            "unit": "ns",
            "range": "± 106628.51394226201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305691.2239583335,
            "unit": "ns",
            "range": "± 32382.607310038915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478550.802734375,
            "unit": "ns",
            "range": "± 13081.940074339369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2806537.0700827204,
            "unit": "ns",
            "range": "± 56686.21054900946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993089.2478376116,
            "unit": "ns",
            "range": "± 27594.819957462467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870298.0945963542,
            "unit": "ns",
            "range": "± 8718.439172480663"
          }
        ]
      }
    ]
  }
}