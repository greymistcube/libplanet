window.BENCHMARK_DATA = {
  "lastUpdate": 1698979899768,
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
          "id": "3cf2b69679f69efe3e013b93a465dfa18cd823eb",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T11:30:24+09:00",
          "tree_id": "433e7e18bf05b1ccd8d1d5fc493971275c2c56c6",
          "url": "https://github.com/greymistcube/libplanet/commit/3cf2b69679f69efe3e013b93a465dfa18cd823eb"
        },
        "date": 1698979884176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9247848.333333334,
            "unit": "ns",
            "range": "± 802111.003608781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22155082.881818183,
            "unit": "ns",
            "range": "± 940127.497346848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54648427.85185185,
            "unit": "ns",
            "range": "± 1523994.95950208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110956665.75,
            "unit": "ns",
            "range": "± 3119935.282477395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223170496.20588234,
            "unit": "ns",
            "range": "± 7114203.1753524635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78415.70238095238,
            "unit": "ns",
            "range": "± 7471.918901258379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341772.53225806454,
            "unit": "ns",
            "range": "± 43263.398963550964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335468.4210526316,
            "unit": "ns",
            "range": "± 37216.847792758315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333269.1208791209,
            "unit": "ns",
            "range": "± 34856.83637739922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345335.066666666,
            "unit": "ns",
            "range": "± 192859.60611898065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4119621.1631578947,
            "unit": "ns",
            "range": "± 326962.31237516523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25999.1935483871,
            "unit": "ns",
            "range": "± 3684.818594018909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113691.51086956522,
            "unit": "ns",
            "range": "± 14485.264011518639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120966.1914893617,
            "unit": "ns",
            "range": "± 14944.998222533843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119936.48888888888,
            "unit": "ns",
            "range": "± 13673.982002652481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9141.532608695652,
            "unit": "ns",
            "range": "± 1096.9866162755247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25988.06043956044,
            "unit": "ns",
            "range": "± 4515.157694326944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704743.2626262626,
            "unit": "ns",
            "range": "± 278369.3217491345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237096.9574468085,
            "unit": "ns",
            "range": "± 336323.1087310449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2721561.994736842,
            "unit": "ns",
            "range": "± 382848.76797311124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12398669.235955056,
            "unit": "ns",
            "range": "± 2094637.020846024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3599634.173469388,
            "unit": "ns",
            "range": "± 336581.0270491557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3681606.355670103,
            "unit": "ns",
            "range": "± 308451.77932478325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4737911.71875,
            "unit": "ns",
            "range": "± 402117.2733088459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4590663.319587629,
            "unit": "ns",
            "range": "± 398121.1429583324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16392105.835164836,
            "unit": "ns",
            "range": "± 2940761.1268841205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5913662.237132353,
            "unit": "ns",
            "range": "± 116567.5553774511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922408.0082194011,
            "unit": "ns",
            "range": "± 75831.20135000591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175100.0423943014,
            "unit": "ns",
            "range": "± 23526.790307462434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075543.399325284,
            "unit": "ns",
            "range": "± 144545.67141140168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925189.9788411459,
            "unit": "ns",
            "range": "± 8574.458212758986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876493.0386328124,
            "unit": "ns",
            "range": "± 23318.172584951535"
          }
        ]
      }
    ]
  }
}