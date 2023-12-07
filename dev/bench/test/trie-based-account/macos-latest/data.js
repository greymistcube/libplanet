window.BENCHMARK_DATA = {
  "lastUpdate": 1701915737819,
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
          "id": "705ff9bd2bef560885a5787490cfcb49bd42c5f8",
          "message": "Commit frequently",
          "timestamp": "2023-12-07T11:02:29+09:00",
          "tree_id": "49d891ca58f88d1fb2a85231602da64a73e414ad",
          "url": "https://github.com/greymistcube/libplanet/commit/705ff9bd2bef560885a5787490cfcb49bd42c5f8"
        },
        "date": 1701915724252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11176035.568421053,
            "unit": "ns",
            "range": "± 2724674.9889362548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23353984.420454547,
            "unit": "ns",
            "range": "± 2955479.9636102547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60830809.746987954,
            "unit": "ns",
            "range": "± 14567918.440367501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107797240.21428572,
            "unit": "ns",
            "range": "± 1094297.0046854585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220610178.23076922,
            "unit": "ns",
            "range": "± 2634083.1518600597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63077.484210526316,
            "unit": "ns",
            "range": "± 6956.776257053656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343901.6,
            "unit": "ns",
            "range": "± 29088.68746321471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359728.9270833333,
            "unit": "ns",
            "range": "± 39260.56288004268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354028.2752808989,
            "unit": "ns",
            "range": "± 47151.596909897686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283322.225,
            "unit": "ns",
            "range": "± 223858.26446880779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733864.796296296,
            "unit": "ns",
            "range": "± 153702.51983355422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25585.86170212766,
            "unit": "ns",
            "range": "± 4969.198203646103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115525.31868131868,
            "unit": "ns",
            "range": "± 13380.705854059768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105939.14893617021,
            "unit": "ns",
            "range": "± 11291.05233050789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103259.18947368421,
            "unit": "ns",
            "range": "± 13562.974160978756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6748.790322580645,
            "unit": "ns",
            "range": "± 1070.9497976770247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19665.271739130436,
            "unit": "ns",
            "range": "± 2890.7632670292687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433972.142857143,
            "unit": "ns",
            "range": "± 144474.9079486223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2697072.90625,
            "unit": "ns",
            "range": "± 113414.6304992996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141455.282828283,
            "unit": "ns",
            "range": "± 190646.91522400617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9288030.267605634,
            "unit": "ns",
            "range": "± 416645.69508735754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344585.8585858587,
            "unit": "ns",
            "range": "± 206644.7483430821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3530986.277777778,
            "unit": "ns",
            "range": "± 133572.83148000517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407382.280701755,
            "unit": "ns",
            "range": "± 187172.48829600945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4334251.377777778,
            "unit": "ns",
            "range": "± 239645.84593965107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20009230.73,
            "unit": "ns",
            "range": "± 3508649.390802752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5562463.055376838,
            "unit": "ns",
            "range": "± 108890.95808100465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1670905.103732639,
            "unit": "ns",
            "range": "± 34835.845340439766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 986203.0667067308,
            "unit": "ns",
            "range": "± 6073.955638659748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2899683.3339419155,
            "unit": "ns",
            "range": "± 163143.00507411835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833023.0087890625,
            "unit": "ns",
            "range": "± 6902.003011023445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717233.1111979167,
            "unit": "ns",
            "range": "± 6830.866999033937"
          }
        ]
      }
    ]
  }
}