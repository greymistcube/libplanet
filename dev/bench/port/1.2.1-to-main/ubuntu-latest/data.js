window.BENCHMARK_DATA = {
  "lastUpdate": 1684377156595,
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
          "id": "146c3cce8685b6fddd790da5468455850ea6d7e8",
          "message": "Port 1.2.1 to main",
          "timestamp": "2023-05-18T11:19:38+09:00",
          "tree_id": "bea99444bda741c3202cf1b8d0c83d398b176647",
          "url": "https://github.com/greymistcube/libplanet/commit/146c3cce8685b6fddd790da5468455850ea6d7e8"
        },
        "date": 1684377149380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387485.222222222,
            "unit": "ns",
            "range": "± 63735.735718627824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536415.911764706,
            "unit": "ns",
            "range": "± 113790.70650164492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4346619.95,
            "unit": "ns",
            "range": "± 153766.8154008213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364846.927536231,
            "unit": "ns",
            "range": "± 199595.9474836394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7080064.12,
            "unit": "ns",
            "range": "± 183398.80776859846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283453.0909090909,
            "unit": "ns",
            "range": "± 10398.833851923755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278567.2068965517,
            "unit": "ns",
            "range": "± 11488.132677358108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241776.07142857142,
            "unit": "ns",
            "range": "± 4151.091505473372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4344532.714285715,
            "unit": "ns",
            "range": "± 48199.02347626904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028603.3333333335,
            "unit": "ns",
            "range": "± 68322.33358831049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19738.68085106383,
            "unit": "ns",
            "range": "± 1351.1595674155676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89245.82954545454,
            "unit": "ns",
            "range": "± 4748.606319974898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80845.86301369863,
            "unit": "ns",
            "range": "± 4022.3094848712517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94471.04081632652,
            "unit": "ns",
            "range": "± 10153.147855702691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5427.114583333333,
            "unit": "ns",
            "range": "± 716.3608598110999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.521276595744,
            "unit": "ns",
            "range": "± 1407.6372159759428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5931080.022916666,
            "unit": "ns",
            "range": "± 38028.66657074794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842209.8490513393,
            "unit": "ns",
            "range": "± 3639.701714168049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346695.3131510417,
            "unit": "ns",
            "range": "± 5603.007351714531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623387.823958333,
            "unit": "ns",
            "range": "± 3213.467527008757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823048.7511067708,
            "unit": "ns",
            "range": "± 1453.0428327604827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755227.2292317708,
            "unit": "ns",
            "range": "± 347.928437204284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7967096.586206896,
            "unit": "ns",
            "range": "± 230457.95558990756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21721328.6,
            "unit": "ns",
            "range": "± 288400.8645788507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53062472.5,
            "unit": "ns",
            "range": "± 353909.804915092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110096029.86666666,
            "unit": "ns",
            "range": "± 821506.4452025982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206357843.2857143,
            "unit": "ns",
            "range": "± 1970442.4489888414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436166.3333333333,
            "unit": "ns",
            "range": "± 79512.55330535979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813788.3214285714,
            "unit": "ns",
            "range": "± 80223.31170853924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2339658.4578313255,
            "unit": "ns",
            "range": "± 117897.85004031794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5773362.363636363,
            "unit": "ns",
            "range": "± 242162.88844099862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50558.913043478264,
            "unit": "ns",
            "range": "± 2446.1848611011205"
          }
        ]
      }
    ]
  }
}