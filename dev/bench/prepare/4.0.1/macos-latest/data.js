window.BENCHMARK_DATA = {
  "lastUpdate": 1705915630369,
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
          "id": "63dd3675c3120f11d2499b653d82e4c35fa8554a",
          "message": "Prepare 4.0.1",
          "timestamp": "2024-01-22T18:02:55+09:00",
          "tree_id": "944c887df52a61c35d84f4f3b2a40b6b0e31e8b6",
          "url": "https://github.com/greymistcube/libplanet/commit/63dd3675c3120f11d2499b653d82e4c35fa8554a"
        },
        "date": 1705915609706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8578637.870967742,
            "unit": "ns",
            "range": "± 336161.1242245562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23922371.829545453,
            "unit": "ns",
            "range": "± 4150365.560446901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63272722.72340426,
            "unit": "ns",
            "range": "± 12031281.885858836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129047065.63917525,
            "unit": "ns",
            "range": "± 24529177.008025907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 316993977.28571427,
            "unit": "ns",
            "range": "± 78198300.88786468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81115.82417582418,
            "unit": "ns",
            "range": "± 5579.689462871182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364832.25,
            "unit": "ns",
            "range": "± 50131.093658377904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360462.76744186046,
            "unit": "ns",
            "range": "± 52073.50891546305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330099.22222222225,
            "unit": "ns",
            "range": "± 24686.51905997233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4704617.043010753,
            "unit": "ns",
            "range": "± 345702.88037671737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4111131.888888889,
            "unit": "ns",
            "range": "± 153365.6433472904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27306.739583333332,
            "unit": "ns",
            "range": "± 3501.5312236815284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118334.2967032967,
            "unit": "ns",
            "range": "± 14832.839113485474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121079.8,
            "unit": "ns",
            "range": "± 14308.185584019433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124718.18085106384,
            "unit": "ns",
            "range": "± 18648.77160644386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8513,
            "unit": "ns",
            "range": "± 888.9887452872009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25379.662790697676,
            "unit": "ns",
            "range": "± 2581.6876769707656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561014.3010752688,
            "unit": "ns",
            "range": "± 162783.69936919794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978163.569767442,
            "unit": "ns",
            "range": "± 278433.94898947136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2756486.8448275863,
            "unit": "ns",
            "range": "± 326365.234708338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 34421911.44210526,
            "unit": "ns",
            "range": "± 8466742.150467947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3604000.510989011,
            "unit": "ns",
            "range": "± 436587.70700484037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3923007.277777778,
            "unit": "ns",
            "range": "± 458201.50140389893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4828050.185393258,
            "unit": "ns",
            "range": "± 449893.7921210505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5348350.5,
            "unit": "ns",
            "range": "± 1129911.6759758592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 42128870.19387755,
            "unit": "ns",
            "range": "± 13890936.030860305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6574966.9921875,
            "unit": "ns",
            "range": "± 288154.00009931356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934067.593470982,
            "unit": "ns",
            "range": "± 93167.69463887412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172560.693452381,
            "unit": "ns",
            "range": "± 53835.11057423435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3030545.3403695915,
            "unit": "ns",
            "range": "± 124692.60866533904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949412.5737591912,
            "unit": "ns",
            "range": "± 19180.8569408321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810997.5973632813,
            "unit": "ns",
            "range": "± 23744.895632098553"
          }
        ]
      }
    ]
  }
}