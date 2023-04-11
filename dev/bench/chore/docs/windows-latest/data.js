window.BENCHMARK_DATA = {
  "lastUpdate": 1681172007071,
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
      },
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
          "id": "933b67833494517d9b4c5b44fdf28f629cea5eac",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:49:12+09:00",
          "tree_id": "61d4b2cb58a71990004e58c9999d612ced05733b",
          "url": "https://github.com/greymistcube/libplanet/commit/933b67833494517d9b4c5b44fdf28f629cea5eac"
        },
        "date": 1681171980072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1944518.75,
            "unit": "ns",
            "range": "± 275147.80805290054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3691500,
            "unit": "ns",
            "range": "± 337215.00590947364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3072138.709677419,
            "unit": "ns",
            "range": "± 297313.46509828937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8040603.125,
            "unit": "ns",
            "range": "± 690263.6294928611"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75431.18279569893,
            "unit": "ns",
            "range": "± 14478.40204441432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10102016.129032258,
            "unit": "ns",
            "range": "± 1061785.9441290745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33220188.46153846,
            "unit": "ns",
            "range": "± 887665.0324652528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69548530.76923077,
            "unit": "ns",
            "range": "± 2818565.6341367415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142238060.86956522,
            "unit": "ns",
            "range": "± 3307442.258375816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282152326.6666667,
            "unit": "ns",
            "range": "± 4333616.627263566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6604151.506696428,
            "unit": "ns",
            "range": "± 153008.88207489555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2076570.2864583333,
            "unit": "ns",
            "range": "± 38087.74178918321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1564290.9745065789,
            "unit": "ns",
            "range": "± 33752.1450729676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3543212.65625,
            "unit": "ns",
            "range": "± 63835.20939169799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1135778.0338541667,
            "unit": "ns",
            "range": "± 20356.55433448594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1029555.17578125,
            "unit": "ns",
            "range": "± 15511.025491852375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4166516.304347826,
            "unit": "ns",
            "range": "± 360107.32962844026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4420456.25,
            "unit": "ns",
            "range": "± 359356.37781499827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5466692.708333333,
            "unit": "ns",
            "range": "± 471077.6749550001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5660182.02247191,
            "unit": "ns",
            "range": "± 353071.4457577949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10134737.362637363,
            "unit": "ns",
            "range": "± 725466.8406004128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 443623.40425531915,
            "unit": "ns",
            "range": "± 50326.26118271174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357203.22580645164,
            "unit": "ns",
            "range": "± 45126.12626948785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330994.623655914,
            "unit": "ns",
            "range": "± 42200.45426705685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7224355.913978495,
            "unit": "ns",
            "range": "± 416323.1474996225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5158061.956521739,
            "unit": "ns",
            "range": "± 305731.5341183694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29884.69387755102,
            "unit": "ns",
            "range": "± 8154.327824931801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133830.52631578947,
            "unit": "ns",
            "range": "± 19417.45800180754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115808.0808080808,
            "unit": "ns",
            "range": "± 31357.44769382474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 255696.7741935484,
            "unit": "ns",
            "range": "± 46261.97953342065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8908.045977011494,
            "unit": "ns",
            "range": "± 1906.9772983615158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30870.103092783505,
            "unit": "ns",
            "range": "± 10090.632670828649"
          }
        ]
      }
    ]
  }
}