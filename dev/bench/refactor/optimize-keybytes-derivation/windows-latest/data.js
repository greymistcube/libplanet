window.BENCHMARK_DATA = {
  "lastUpdate": 1689824990269,
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
          "id": "032a859e1d95812aacd99ccb608d965bfce3d5b2",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T00:50:49+09:00",
          "tree_id": "0074298ada438a2572c19c5e026f603c1ccc74bc",
          "url": "https://github.com/greymistcube/libplanet/commit/032a859e1d95812aacd99ccb608d965bfce3d5b2"
        },
        "date": 1689784467168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484888.4210526317,
            "unit": "ns",
            "range": "± 109947.07611097598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686994.776119403,
            "unit": "ns",
            "range": "± 126568.41398732662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817568.4782608696,
            "unit": "ns",
            "range": "± 108309.90125444107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4998125.806451613,
            "unit": "ns",
            "range": "± 227444.9902402877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54145.744680851065,
            "unit": "ns",
            "range": "± 4706.456669908275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8154342.857142857,
            "unit": "ns",
            "range": "± 122514.15437400702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21530113.333333332,
            "unit": "ns",
            "range": "± 250697.0735103756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53242478.571428575,
            "unit": "ns",
            "range": "± 402433.5208904245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107685350,
            "unit": "ns",
            "range": "± 856317.1667086909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212836892.85714287,
            "unit": "ns",
            "range": "± 1328398.1003531953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5146490.572916667,
            "unit": "ns",
            "range": "± 42763.025970573806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568883.9317908655,
            "unit": "ns",
            "range": "± 4004.479539395947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219968.4291294643,
            "unit": "ns",
            "range": "± 5342.326428038578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2724548.2979910714,
            "unit": "ns",
            "range": "± 9297.743641568137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862739.2299107143,
            "unit": "ns",
            "range": "± 2022.4993077136025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785086.3411458334,
            "unit": "ns",
            "range": "± 2290.4005441012537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505914.6341463416,
            "unit": "ns",
            "range": "± 110794.82966496138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3866783.7209302327,
            "unit": "ns",
            "range": "± 142405.6980036974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363846.153846154,
            "unit": "ns",
            "range": "± 113281.709841507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245315.384615385,
            "unit": "ns",
            "range": "± 48690.99585059929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6545792,
            "unit": "ns",
            "range": "± 173983.29163073868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300729.6296296296,
            "unit": "ns",
            "range": "± 7651.93865906969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273005.45454545453,
            "unit": "ns",
            "range": "± 10927.800398470938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267611.1111111111,
            "unit": "ns",
            "range": "± 15806.585355147683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268420,
            "unit": "ns",
            "range": "± 75742.98836007387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944414.285714286,
            "unit": "ns",
            "range": "± 69024.49796037142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23975,
            "unit": "ns",
            "range": "± 3438.1451547692336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94905.10204081633,
            "unit": "ns",
            "range": "± 8330.658473856492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83074.46808510639,
            "unit": "ns",
            "range": "± 7923.219397946945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113793.87755102041,
            "unit": "ns",
            "range": "± 15536.261649660362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7951.0204081632655,
            "unit": "ns",
            "range": "± 1188.6269387739844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28692.708333333332,
            "unit": "ns",
            "range": "± 2752.0421046223173"
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
          "id": "8b60cd32ce822883bd543daa20bc7de6137d9b6e",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T12:13:29+09:00",
          "tree_id": "a012fd5e7c0f05bc58c4fefefa3234c3785eb83a",
          "url": "https://github.com/greymistcube/libplanet/commit/8b60cd32ce822883bd543daa20bc7de6137d9b6e"
        },
        "date": 1689823733966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321854,
            "unit": "ns",
            "range": "± 104779.39443893489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2400074.1379310344,
            "unit": "ns",
            "range": "± 104905.27985031005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696416.3265306123,
            "unit": "ns",
            "range": "± 118206.66416216089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4618753.03030303,
            "unit": "ns",
            "range": "± 202170.13567761873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43162.67605633803,
            "unit": "ns",
            "range": "± 2131.3261852300047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6751050,
            "unit": "ns",
            "range": "± 14582.009463719327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17499013.333333332,
            "unit": "ns",
            "range": "± 85496.5401694851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44725840,
            "unit": "ns",
            "range": "± 370726.14420890255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89782835.71428572,
            "unit": "ns",
            "range": "± 747815.1096639852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179461680,
            "unit": "ns",
            "range": "± 791527.2580813084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4909766.462053572,
            "unit": "ns",
            "range": "± 4270.627981766924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525452.4972098214,
            "unit": "ns",
            "range": "± 1191.4617494229967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161189.2578125,
            "unit": "ns",
            "range": "± 2045.8654094486153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536017.1354166665,
            "unit": "ns",
            "range": "± 2321.8919544350306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810422.7864583334,
            "unit": "ns",
            "range": "± 662.5584637396031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744552.8580729166,
            "unit": "ns",
            "range": "± 766.2045714377819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972837.5,
            "unit": "ns",
            "range": "± 57004.16212874284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3099728.2608695654,
            "unit": "ns",
            "range": "± 42685.807270010606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876848,
            "unit": "ns",
            "range": "± 99948.89577512433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3436897.8260869565,
            "unit": "ns",
            "range": "± 132006.2026979211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5924316.666666667,
            "unit": "ns",
            "range": "± 213711.8871075189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253932.5,
            "unit": "ns",
            "range": "± 9033.666021880143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242043.24324324325,
            "unit": "ns",
            "range": "± 6162.906084909246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216767.85714285713,
            "unit": "ns",
            "range": "± 9211.082398993018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833346.6666666665,
            "unit": "ns",
            "range": "± 28306.482515158117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3573526.6666666665,
            "unit": "ns",
            "range": "± 27434.55763049502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17682.022471910113,
            "unit": "ns",
            "range": "± 1357.0155922726508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82214.54545454546,
            "unit": "ns",
            "range": "± 3453.630305861108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67818.42105263157,
            "unit": "ns",
            "range": "± 2347.955437575872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76170.68965517242,
            "unit": "ns",
            "range": "± 2155.450750326736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4147.959183673469,
            "unit": "ns",
            "range": "± 624.6202296648288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16839.36170212766,
            "unit": "ns",
            "range": "± 1166.0260685319156"
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
          "id": "564935623500069b7886004298a8bd7d9e61f45e",
          "message": "Added tests",
          "timestamp": "2023-07-20T12:34:10+09:00",
          "tree_id": "be853d6f7bc833b40a9e17c4e2a791f04bc17903",
          "url": "https://github.com/greymistcube/libplanet/commit/564935623500069b7886004298a8bd7d9e61f45e"
        },
        "date": 1689824966854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1275400,
            "unit": "ns",
            "range": "± 50861.53233729902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477824.025974026,
            "unit": "ns",
            "range": "± 126885.5725722957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1848655.1724137932,
            "unit": "ns",
            "range": "± 53716.25576122116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4653987.755102041,
            "unit": "ns",
            "range": "± 185790.49427676716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43360.9375,
            "unit": "ns",
            "range": "± 1997.825578885903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6851153.333333333,
            "unit": "ns",
            "range": "± 24828.119618882214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17661133.333333332,
            "unit": "ns",
            "range": "± 215214.53637397886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45121192.307692304,
            "unit": "ns",
            "range": "± 134754.8481597753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90987766.66666667,
            "unit": "ns",
            "range": "± 653187.9205280893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180647926.66666666,
            "unit": "ns",
            "range": "± 965814.5307508704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925145.8984375,
            "unit": "ns",
            "range": "± 4541.001509020093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525974.39453125,
            "unit": "ns",
            "range": "± 2610.4394999734745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172828.111049107,
            "unit": "ns",
            "range": "± 2950.146557788645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526877.253605769,
            "unit": "ns",
            "range": "± 6304.144349235596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815112.2628348215,
            "unit": "ns",
            "range": "± 2081.2297368760296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745934.2075892857,
            "unit": "ns",
            "range": "± 1576.9924804691748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3008191.6666666665,
            "unit": "ns",
            "range": "± 78065.4124640894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132156.862745098,
            "unit": "ns",
            "range": "± 126801.09030272882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3958104.1666666665,
            "unit": "ns",
            "range": "± 101032.86369840977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3528970.588235294,
            "unit": "ns",
            "range": "± 70780.90106718303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5958122.916666667,
            "unit": "ns",
            "range": "± 234817.3389150423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251613.33333333334,
            "unit": "ns",
            "range": "± 10917.72725257331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237587.03703703705,
            "unit": "ns",
            "range": "± 9775.847138822357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214445.94594594595,
            "unit": "ns",
            "range": "± 10737.684110264778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3885206.6666666665,
            "unit": "ns",
            "range": "± 53410.02402795441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3513564.285714286,
            "unit": "ns",
            "range": "± 25339.892755005196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17723.711340206184,
            "unit": "ns",
            "range": "± 1792.389768569947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79650,
            "unit": "ns",
            "range": "± 3326.095171655359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65577.02702702703,
            "unit": "ns",
            "range": "± 2199.576808874411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84871.875,
            "unit": "ns",
            "range": "± 11535.735809123522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4137.113402061856,
            "unit": "ns",
            "range": "± 676.4366790439543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16556.122448979593,
            "unit": "ns",
            "range": "± 2144.2354428411563"
          }
        ]
      }
    ]
  }
}