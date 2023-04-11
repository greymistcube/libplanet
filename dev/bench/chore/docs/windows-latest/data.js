window.BENCHMARK_DATA = {
  "lastUpdate": 1681171656985,
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
          "id": "610a906bda27f7a618e63d50ab8551c99e390adc",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:50:26+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/greymistcube/libplanet/commit/610a906bda27f7a618e63d50ab8551c99e390adc"
        },
        "date": 1681171634552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434874.4897959183,
            "unit": "ns",
            "range": "± 119193.96676700772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2568643.2835820895,
            "unit": "ns",
            "range": "± 120571.74429520399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2254721.052631579,
            "unit": "ns",
            "range": "± 138490.49348642753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5645089,
            "unit": "ns",
            "range": "± 384411.0946314604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52517.52577319588,
            "unit": "ns",
            "range": "± 5703.270448999679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7299335.714285715,
            "unit": "ns",
            "range": "± 69628.13983687096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19683235.714285713,
            "unit": "ns",
            "range": "± 201196.5652220307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49869126.666666664,
            "unit": "ns",
            "range": "± 637909.0815946676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101232306.66666667,
            "unit": "ns",
            "range": "± 1192583.2151059234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203255146.66666666,
            "unit": "ns",
            "range": "± 1841409.9554676134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4874368.638392857,
            "unit": "ns",
            "range": "± 24983.420181761994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530509.8353794643,
            "unit": "ns",
            "range": "± 5963.080063948472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178263.462611607,
            "unit": "ns",
            "range": "± 7405.605190860057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707507.0963541665,
            "unit": "ns",
            "range": "± 23717.897544537198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825573.5546875,
            "unit": "ns",
            "range": "± 3450.542453547741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765472.8515625,
            "unit": "ns",
            "range": "± 4244.420407381607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339786.8421052634,
            "unit": "ns",
            "range": "± 114035.22493025265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3533039.6226415094,
            "unit": "ns",
            "range": "± 140514.44675195753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4189273.3333333335,
            "unit": "ns",
            "range": "± 57683.1798542282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4450605.263157895,
            "unit": "ns",
            "range": "± 85993.53640881137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7222535.294117647,
            "unit": "ns",
            "range": "± 148284.7975231129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319830.1204819277,
            "unit": "ns",
            "range": "± 17036.458286889236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273806.6666666667,
            "unit": "ns",
            "range": "± 8103.4659818833225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228657.6923076923,
            "unit": "ns",
            "range": "± 7830.015951297344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5273400,
            "unit": "ns",
            "range": "± 51779.44350058978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685707.1428571427,
            "unit": "ns",
            "range": "± 50788.98599993013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21841.23711340206,
            "unit": "ns",
            "range": "± 2263.88091271197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94832.29166666667,
            "unit": "ns",
            "range": "± 7788.729979462791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97976,
            "unit": "ns",
            "range": "± 12713.63397651863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 192705.15463917525,
            "unit": "ns",
            "range": "± 20354.296081816592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8394.623655913978,
            "unit": "ns",
            "range": "± 986.9105936553207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24346.938775510203,
            "unit": "ns",
            "range": "± 2845.695033382362"
          }
        ]
      }
    ]
  }
}