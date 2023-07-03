window.BENCHMARK_DATA = {
  "lastUpdate": 1688377596311,
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
          "id": "4eb356f93cfaee26859c79aa1416e4a1a8e498cb",
          "message": "Align TxResult nullability with TxSuccess",
          "timestamp": "2023-07-03T18:18:49+09:00",
          "tree_id": "e5e2c5e6b39c0cf7ee667f8c3115cbc0aac4ef71",
          "url": "https://github.com/greymistcube/libplanet/commit/4eb356f93cfaee26859c79aa1416e4a1a8e498cb"
        },
        "date": 1688376899360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401967.3469387756,
            "unit": "ns",
            "range": "± 119709.03623275604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614600,
            "unit": "ns",
            "range": "± 70852.35461045845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867621.4285714286,
            "unit": "ns",
            "range": "± 139554.02844658447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4761855,
            "unit": "ns",
            "range": "± 167704.21603800866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48969.230769230766,
            "unit": "ns",
            "range": "± 2525.4577927451223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7216296,
            "unit": "ns",
            "range": "± 191143.04957282648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20281526.666666668,
            "unit": "ns",
            "range": "± 193687.73272854375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50090821.428571425,
            "unit": "ns",
            "range": "± 572711.0980356386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98419760,
            "unit": "ns",
            "range": "± 1026125.6925236512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198515007.14285713,
            "unit": "ns",
            "range": "± 1148568.8281604974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789664.479166667,
            "unit": "ns",
            "range": "± 20632.478753205785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524727.845982143,
            "unit": "ns",
            "range": "± 3976.087900021633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176254.0364583333,
            "unit": "ns",
            "range": "± 5630.270446028742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639886.484375,
            "unit": "ns",
            "range": "± 8675.072084506659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831554.9674479166,
            "unit": "ns",
            "range": "± 2765.4671210586457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757656.5499441965,
            "unit": "ns",
            "range": "± 1958.46500747705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147226.6666666665,
            "unit": "ns",
            "range": "± 88629.58925750488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406581.395348837,
            "unit": "ns",
            "range": "± 124893.73436534328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4139633.3333333335,
            "unit": "ns",
            "range": "± 119057.76150555091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3726755.102040816,
            "unit": "ns",
            "range": "± 146087.17440456644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6087670.588235294,
            "unit": "ns",
            "range": "± 98354.65650330111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267695.45454545453,
            "unit": "ns",
            "range": "± 9603.389773273848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256928,
            "unit": "ns",
            "range": "± 9929.137496709945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230616.30434782608,
            "unit": "ns",
            "range": "± 12899.699946880211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983971.4285714286,
            "unit": "ns",
            "range": "± 53137.15820795823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744635.714285714,
            "unit": "ns",
            "range": "± 64760.1326451682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21179.166666666668,
            "unit": "ns",
            "range": "± 1911.0160795085822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92712.5,
            "unit": "ns",
            "range": "± 6466.744890103847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76956.25,
            "unit": "ns",
            "range": "± 5158.2292453291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99801.02040816327,
            "unit": "ns",
            "range": "± 15578.495916824162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5702.1505376344085,
            "unit": "ns",
            "range": "± 750.9383252947256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20464.516129032258,
            "unit": "ns",
            "range": "± 1764.7296357337648"
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
          "id": "f791366a0dccda02042497e48ec7b9118bc9ffd7",
          "message": "Changelog",
          "timestamp": "2023-07-03T18:21:10+09:00",
          "tree_id": "0ff340aa0972ee9d0297222e1544e2fa14961ab4",
          "url": "https://github.com/greymistcube/libplanet/commit/f791366a0dccda02042497e48ec7b9118bc9ffd7"
        },
        "date": 1688377028328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433338.4615384615,
            "unit": "ns",
            "range": "± 66828.53687868794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2795895.1219512196,
            "unit": "ns",
            "range": "± 100473.14305629021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882707.2463768115,
            "unit": "ns",
            "range": "± 80018.69876847642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5142091.666666667,
            "unit": "ns",
            "range": "± 227876.96002981384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54214.43298969072,
            "unit": "ns",
            "range": "± 4844.9068982007975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8072655,
            "unit": "ns",
            "range": "± 180723.87333923773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21541135.714285713,
            "unit": "ns",
            "range": "± 166040.0396898886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53456403.333333336,
            "unit": "ns",
            "range": "± 602951.5389987428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107042673.33333333,
            "unit": "ns",
            "range": "± 913834.6259164234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217667486.66666666,
            "unit": "ns",
            "range": "± 915928.6090915496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4998586.536458333,
            "unit": "ns",
            "range": "± 19759.915349693332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584807.0182291667,
            "unit": "ns",
            "range": "± 4729.746834975079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179907.0763221155,
            "unit": "ns",
            "range": "± 3604.3672069880463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726943.885216346,
            "unit": "ns",
            "range": "± 5752.939658886093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842650.1041666666,
            "unit": "ns",
            "range": "± 2876.94758997241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783829.4991629465,
            "unit": "ns",
            "range": "± 2675.2105719041633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541780,
            "unit": "ns",
            "range": "± 60114.690384297915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3732615.789473684,
            "unit": "ns",
            "range": "± 81934.13522226182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471584.2105263155,
            "unit": "ns",
            "range": "± 95544.95895277025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4073845.4545454546,
            "unit": "ns",
            "range": "± 172299.56344195871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6543514.814814814,
            "unit": "ns",
            "range": "± 169259.59739566117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287625,
            "unit": "ns",
            "range": "± 12292.928491986395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276358.1395348837,
            "unit": "ns",
            "range": "± 9693.891855875007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265544.77611940296,
            "unit": "ns",
            "range": "± 12444.279245258302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336521.428571428,
            "unit": "ns",
            "range": "± 23354.89336212101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941773.076923077,
            "unit": "ns",
            "range": "± 24643.124593760218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25424.242424242424,
            "unit": "ns",
            "range": "± 2428.7433094256335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107958.16326530612,
            "unit": "ns",
            "range": "± 8952.876902931763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98748.48484848485,
            "unit": "ns",
            "range": "± 9014.493586423256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115400,
            "unit": "ns",
            "range": "± 10141.255221680616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7365.625,
            "unit": "ns",
            "range": "± 1150.727744562224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25566.666666666668,
            "unit": "ns",
            "range": "± 1765.2031126716004"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20ebf243bf70cb5dab6152dffd0a9b5438819b06",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-07-03T18:30:56+09:00",
          "tree_id": "08ef06cc2cee22baf60d1b4ccb2cbe34c8e7976f",
          "url": "https://github.com/greymistcube/libplanet/commit/20ebf243bf70cb5dab6152dffd0a9b5438819b06"
        },
        "date": 1688377575996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503542,
            "unit": "ns",
            "range": "± 151438.95671894075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800748.936170213,
            "unit": "ns",
            "range": "± 101822.47311596962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1890082,
            "unit": "ns",
            "range": "± 123759.78718975128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5018486.363636363,
            "unit": "ns",
            "range": "± 186893.5682580778"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48918.47826086957,
            "unit": "ns",
            "range": "± 3340.9194413825558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7643950,
            "unit": "ns",
            "range": "± 158730.5013500037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20904450,
            "unit": "ns",
            "range": "± 187903.92696596516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53772480,
            "unit": "ns",
            "range": "± 518488.66938990506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106111100,
            "unit": "ns",
            "range": "± 861690.5062558299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213306486.66666666,
            "unit": "ns",
            "range": "± 1932139.4081863416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4967867.552083333,
            "unit": "ns",
            "range": "± 22132.057375697714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561422.4330357143,
            "unit": "ns",
            "range": "± 4845.0841985535235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211913.3231026786,
            "unit": "ns",
            "range": "± 4518.083182744795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704210.5859375,
            "unit": "ns",
            "range": "± 8829.386813515735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868437.4283854166,
            "unit": "ns",
            "range": "± 2272.554981618312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771130.0716145834,
            "unit": "ns",
            "range": "± 2611.5595541270295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343843.75,
            "unit": "ns",
            "range": "± 64583.434085942914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3596240,
            "unit": "ns",
            "range": "± 80416.25523029009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4340200,
            "unit": "ns",
            "range": "± 85524.03171039121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3934308.3333333335,
            "unit": "ns",
            "range": "± 44263.189268764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6456634.375,
            "unit": "ns",
            "range": "± 199933.4189325246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277578.26086956525,
            "unit": "ns",
            "range": "± 13323.849355078608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262088.679245283,
            "unit": "ns",
            "range": "± 10783.992060481245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234328.28282828283,
            "unit": "ns",
            "range": "± 16567.19182542462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112657.8947368423,
            "unit": "ns",
            "range": "± 90470.414536647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832630,
            "unit": "ns",
            "range": "± 67334.20060733306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20107.894736842107,
            "unit": "ns",
            "range": "± 2002.3698165970272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89798.95833333333,
            "unit": "ns",
            "range": "± 6948.0250096763275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78250.51546391753,
            "unit": "ns",
            "range": "± 6372.812103501029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102116.66666666667,
            "unit": "ns",
            "range": "± 11547.837953639146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6371.134020618557,
            "unit": "ns",
            "range": "± 977.8759680730006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21814.583333333332,
            "unit": "ns",
            "range": "± 2039.2970495100392"
          }
        ]
      }
    ]
  }
}