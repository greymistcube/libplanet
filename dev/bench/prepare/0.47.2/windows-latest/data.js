window.BENCHMARK_DATA = {
  "lastUpdate": 1678782822783,
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
          "id": "8d6285846fc703b3e6fa779e0ba19551fccd0f22",
          "message": "Prepare 0.47.2",
          "timestamp": "2023-03-14T17:20:10+09:00",
          "tree_id": "8dbcdc2786a763fbd504de7e19f1d806760b87d8",
          "url": "https://github.com/greymistcube/libplanet/commit/8d6285846fc703b3e6fa779e0ba19551fccd0f22"
        },
        "date": 1678782800571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92864.28571428571,
            "unit": "ns",
            "range": "± 3406.0793159614195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857882.932692308,
            "unit": "ns",
            "range": "± 9370.363919048083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1541536.704799107,
            "unit": "ns",
            "range": "± 1799.6542190344137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148519.1127232143,
            "unit": "ns",
            "range": "± 661.5792523410188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554263.59375,
            "unit": "ns",
            "range": "± 7301.187171927883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814462.7790178572,
            "unit": "ns",
            "range": "± 501.9116827486711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735159.0364583334,
            "unit": "ns",
            "range": "± 632.8506849677651"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3960223.3258928573,
            "unit": "ns",
            "range": "± 17375.734725087834"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4888773.684210527,
            "unit": "ns",
            "range": "± 168303.05425792554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23314850,
            "unit": "ns",
            "range": "± 254034.8419195503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5572679.824561403,
            "unit": "ns",
            "range": "± 238806.34037176313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26377040,
            "unit": "ns",
            "range": "± 400660.2921606853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85434.02061855671,
            "unit": "ns",
            "range": "± 8961.722846337663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185273.33333333334,
            "unit": "ns",
            "range": "± 11168.65396816797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170206.77966101695,
            "unit": "ns",
            "range": "± 7364.918343690875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3429800,
            "unit": "ns",
            "range": "± 21335.751351060637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8423766.666666666,
            "unit": "ns",
            "range": "± 53829.23617019535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17909.89010989011,
            "unit": "ns",
            "range": "± 1881.432961279776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47866.666666666664,
            "unit": "ns",
            "range": "± 4503.831078317933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42887.878787878784,
            "unit": "ns",
            "range": "± 3694.3772148449953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87443.82022471911,
            "unit": "ns",
            "range": "± 11784.639029610651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5055.670103092783,
            "unit": "ns",
            "range": "± 736.4001788210659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17954.945054945056,
            "unit": "ns",
            "range": "± 1683.2682321578877"
          }
        ]
      }
    ]
  }
}