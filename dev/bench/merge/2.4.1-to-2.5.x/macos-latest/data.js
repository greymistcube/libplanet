window.BENCHMARK_DATA = {
  "lastUpdate": 1689324938707,
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
          "id": "71b3f912ea5fa366f1a67c91704479fd1a3be0e0",
          "message": "Merge tag '2.4.1' into port/2.4.1-to-2.5.1\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:35:32+09:00",
          "tree_id": "e42dafe523e0e77b5f490a7f80835e4746fbf95e",
          "url": "https://github.com/greymistcube/libplanet/commit/71b3f912ea5fa366f1a67c91704479fd1a3be0e0"
        },
        "date": 1689324912911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8658052.547619049,
            "unit": "ns",
            "range": "± 302040.0507657805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21814768.809859157,
            "unit": "ns",
            "range": "± 1068626.7721433574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54671064.719512194,
            "unit": "ns",
            "range": "± 2882683.258429554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111288833.22,
            "unit": "ns",
            "range": "± 2897449.1359479395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225816845.92307693,
            "unit": "ns",
            "range": "± 3188628.1343894447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66004.65957446808,
            "unit": "ns",
            "range": "± 10185.404672893772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347311.3804347826,
            "unit": "ns",
            "range": "± 36071.023292985876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325653.3210526316,
            "unit": "ns",
            "range": "± 33475.82894020093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325688.2173913043,
            "unit": "ns",
            "range": "± 22108.155872281633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4425863.023255814,
            "unit": "ns",
            "range": "± 163689.34586377017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196972.35106383,
            "unit": "ns",
            "range": "± 313543.8875863342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24497.7,
            "unit": "ns",
            "range": "± 4677.675227952689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87105.51648351649,
            "unit": "ns",
            "range": "± 8844.323071091218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93671.10416666667,
            "unit": "ns",
            "range": "± 16038.380365452422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108402.76344086022,
            "unit": "ns",
            "range": "± 12477.283348931307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6624.8125,
            "unit": "ns",
            "range": "± 973.3461364364629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21774.41489361702,
            "unit": "ns",
            "range": "± 3640.1012737287406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617190.731958763,
            "unit": "ns",
            "range": "± 153517.55626172936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3153660.4479166665,
            "unit": "ns",
            "range": "± 285528.37013589457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170486.1774193547,
            "unit": "ns",
            "range": "± 171433.57683651132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5836149.531746032,
            "unit": "ns",
            "range": "± 252079.72541395147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3615812.6894736844,
            "unit": "ns",
            "range": "± 353465.97633249953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3759972.216494845,
            "unit": "ns",
            "range": "± 339246.72495794593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653041.382978723,
            "unit": "ns",
            "range": "± 301213.7644712256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314757.724489796,
            "unit": "ns",
            "range": "± 440117.44336152857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8117752.99,
            "unit": "ns",
            "range": "± 742425.7014934154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7234272.68551261,
            "unit": "ns",
            "range": "± 313117.0571698988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040334.0546875,
            "unit": "ns",
            "range": "± 45531.298734130396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1452262.8455771168,
            "unit": "ns",
            "range": "± 65487.361867499945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2799869.174987793,
            "unit": "ns",
            "range": "± 129419.59612465072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853620.5672637195,
            "unit": "ns",
            "range": "± 30560.8408580805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748496.182016226,
            "unit": "ns",
            "range": "± 11698.213675608946"
          }
        ]
      }
    ]
  }
}