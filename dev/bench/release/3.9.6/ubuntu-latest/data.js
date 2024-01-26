window.BENCHMARK_DATA = {
  "lastUpdate": 1706247382370,
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
          "id": "43f1a0ff33d50a9e90602666c3b215515c5a3cd0",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:25:55+09:00",
          "tree_id": "27eaabd17f16bc3ddddb2605fb0cb3539cc6672e",
          "url": "https://github.com/greymistcube/libplanet/commit/43f1a0ff33d50a9e90602666c3b215515c5a3cd0"
        },
        "date": 1706247376159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405309.204225352,
            "unit": "ns",
            "range": "± 117032.87226604257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2667645.822222222,
            "unit": "ns",
            "range": "± 101006.82184281346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3164502.3666666667,
            "unit": "ns",
            "range": "± 57973.18248720902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2948884.7291666665,
            "unit": "ns",
            "range": "± 106640.56176144903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827309.818181818,
            "unit": "ns",
            "range": "± 167229.8904527014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41320.0824742268,
            "unit": "ns",
            "range": "± 5466.733884882923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952418.7173913043,
            "unit": "ns",
            "range": "± 72432.04403269605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893724.7741935484,
            "unit": "ns",
            "range": "± 57026.50042492506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1442685.8144329898,
            "unit": "ns",
            "range": "± 125847.95478881533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5752192,
            "unit": "ns",
            "range": "± 146190.18484390684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5617795.6,
            "unit": "ns",
            "range": "± 36446.154435197765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14587242.92857143,
            "unit": "ns",
            "range": "± 48050.54208405383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36326383.416666664,
            "unit": "ns",
            "range": "± 394690.38507658313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75168955.07142857,
            "unit": "ns",
            "range": "± 466876.09349993896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152898587.25,
            "unit": "ns",
            "range": "± 794921.4870734805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710665.0027901786,
            "unit": "ns",
            "range": "± 8395.068513427716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199933.6216517857,
            "unit": "ns",
            "range": "± 3567.158469850088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749628.8376652644,
            "unit": "ns",
            "range": "± 3674.7070806206198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950731.4915865385,
            "unit": "ns",
            "range": "± 4188.491650600656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618750.4473407452,
            "unit": "ns",
            "range": "± 642.3743161659069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579800.1567382812,
            "unit": "ns",
            "range": "± 1970.9698738375657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204785.42666666667,
            "unit": "ns",
            "range": "± 10167.429250909605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191041.22463768115,
            "unit": "ns",
            "range": "± 9192.931741103594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163522.82142857142,
            "unit": "ns",
            "range": "± 4598.964658474142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3107436.346153846,
            "unit": "ns",
            "range": "± 44295.11875637118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857423.153846154,
            "unit": "ns",
            "range": "± 26583.96153963938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14811.69587628866,
            "unit": "ns",
            "range": "± 3300.2495980076246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68077.61458333333,
            "unit": "ns",
            "range": "± 5704.791818462407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72109.24242424243,
            "unit": "ns",
            "range": "± 16227.495120930234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65188.257894736846,
            "unit": "ns",
            "range": "± 15252.356870344202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3677.1938775510203,
            "unit": "ns",
            "range": "± 1344.0423920824473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12724.573684210527,
            "unit": "ns",
            "range": "± 1358.7557374625308"
          }
        ]
      }
    ]
  }
}