window.BENCHMARK_DATA = {
  "lastUpdate": 1693380442605,
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
          "id": "39e52aba4cbde119579b4cf5df3a381e960bc8f5",
          "message": "Removed unused Get()",
          "timestamp": "2023-08-30T16:02:47+09:00",
          "tree_id": "134dcb6fe4e18ac927f34502576fb3ad458102a9",
          "url": "https://github.com/greymistcube/libplanet/commit/39e52aba4cbde119579b4cf5df3a381e960bc8f5"
        },
        "date": 1693380083248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9297343.961538462,
            "unit": "ns",
            "range": "± 248744.73394280826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23511183.733333334,
            "unit": "ns",
            "range": "± 307776.7596130738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59000659.666666664,
            "unit": "ns",
            "range": "± 793922.6735849266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122231702.35714285,
            "unit": "ns",
            "range": "± 1468946.6984520475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237863098.96153846,
            "unit": "ns",
            "range": "± 783142.0068285419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65780.43181818182,
            "unit": "ns",
            "range": "± 5439.711234719806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365313.9310344828,
            "unit": "ns",
            "range": "± 19859.191731481587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348718.9220779221,
            "unit": "ns",
            "range": "± 17528.923518127824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346701.70967741933,
            "unit": "ns",
            "range": "± 15571.379554355692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4935244.25,
            "unit": "ns",
            "range": "± 103666.66966818267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4556466.966666667,
            "unit": "ns",
            "range": "± 78534.38930254574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21080.70786516854,
            "unit": "ns",
            "range": "± 1313.6566782203374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97648.38461538461,
            "unit": "ns",
            "range": "± 5495.790809073252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119888.625,
            "unit": "ns",
            "range": "± 8909.941166147537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112447.1,
            "unit": "ns",
            "range": "± 8696.126899469982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7868.071428571428,
            "unit": "ns",
            "range": "± 811.1194377328416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20757.145833333332,
            "unit": "ns",
            "range": "± 1600.4371440931327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731226,
            "unit": "ns",
            "range": "± 176931.87676092834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320897.362318841,
            "unit": "ns",
            "range": "± 151777.2092382325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269615.78,
            "unit": "ns",
            "range": "± 231758.62289392488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6434548.732142857,
            "unit": "ns",
            "range": "± 265419.7524031076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3945493.653846154,
            "unit": "ns",
            "range": "± 136516.3183132984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4095743.8732394367,
            "unit": "ns",
            "range": "± 199069.10312960815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5001640.785714285,
            "unit": "ns",
            "range": "± 108946.24682361657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5212489.818181818,
            "unit": "ns",
            "range": "± 211557.46596926494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8248234.444444444,
            "unit": "ns",
            "range": "± 296321.64653644647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6544356.370833334,
            "unit": "ns",
            "range": "± 112058.36816975311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956770.5419270834,
            "unit": "ns",
            "range": "± 13235.367092164033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165492.4263020833,
            "unit": "ns",
            "range": "± 8079.502638074788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2888902.6796875,
            "unit": "ns",
            "range": "± 28793.40489446108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921956.81328125,
            "unit": "ns",
            "range": "± 10458.36832271625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862633.9027622768,
            "unit": "ns",
            "range": "± 7015.416821303225"
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
          "id": "dc404976004174a02b1b7f4f50b6460bcd58eb49",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:04:43+09:00",
          "tree_id": "155e208c580ab382c2c9f1b2509ed1313ea8ad4f",
          "url": "https://github.com/greymistcube/libplanet/commit/dc404976004174a02b1b7f4f50b6460bcd58eb49"
        },
        "date": 1693380172584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9076730.096774194,
            "unit": "ns",
            "range": "± 615574.9439884222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22382390.13253012,
            "unit": "ns",
            "range": "± 1188193.2310194473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54328544.511627905,
            "unit": "ns",
            "range": "± 1975290.3621020762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111326087.77272727,
            "unit": "ns",
            "range": "± 4416630.919116488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222101454.2647059,
            "unit": "ns",
            "range": "± 7144585.380145613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67853.82105263158,
            "unit": "ns",
            "range": "± 10014.765694435675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383790.5106382979,
            "unit": "ns",
            "range": "± 60713.374247403364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357438.8617021277,
            "unit": "ns",
            "range": "± 49569.8076145453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329711.2688172043,
            "unit": "ns",
            "range": "± 32970.461995530044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242064.142857143,
            "unit": "ns",
            "range": "± 226818.3748723599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3855227.3191489363,
            "unit": "ns",
            "range": "± 271542.73262534384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22518.05789473684,
            "unit": "ns",
            "range": "± 3934.6317211636224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119641.10416666667,
            "unit": "ns",
            "range": "± 27955.673964511883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107469.76136363637,
            "unit": "ns",
            "range": "± 10603.565262482778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108558.52688172043,
            "unit": "ns",
            "range": "± 17956.207388963438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5880.204301075269,
            "unit": "ns",
            "range": "± 1147.437822120865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19457.608695652172,
            "unit": "ns",
            "range": "± 3074.0422021473446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462599.0102040817,
            "unit": "ns",
            "range": "± 139019.40003114857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775957.090909091,
            "unit": "ns",
            "range": "± 135255.41550537304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1957640.8163265307,
            "unit": "ns",
            "range": "± 196120.7000678407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5499184.090909091,
            "unit": "ns",
            "range": "± 257217.6654366269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438583.4838709678,
            "unit": "ns",
            "range": "± 269460.6699952225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4188326.3146067415,
            "unit": "ns",
            "range": "± 937769.3336766777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363799.103174604,
            "unit": "ns",
            "range": "± 199026.7850555134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228663.277777778,
            "unit": "ns",
            "range": "± 421250.91038604605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7492294.268041237,
            "unit": "ns",
            "range": "± 830828.470493578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6025851.105840774,
            "unit": "ns",
            "range": "± 217605.4641030815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1635843.0983455882,
            "unit": "ns",
            "range": "± 33225.68099549788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025866.47890625,
            "unit": "ns",
            "range": "± 9748.560774302767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2519768.4302884615,
            "unit": "ns",
            "range": "± 17798.77753687766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907564.2374549279,
            "unit": "ns",
            "range": "± 8288.726852398926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729540.4971354167,
            "unit": "ns",
            "range": "± 10732.709856029369"
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
          "id": "bd669b61ec2394703aaa122b3a23b42507f3f0fb",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:09:56+09:00",
          "tree_id": "4e193552dc847b8fa221f085bdb64c18cba4df78",
          "url": "https://github.com/greymistcube/libplanet/commit/bd669b61ec2394703aaa122b3a23b42507f3f0fb"
        },
        "date": 1693380422383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8802968.715686275,
            "unit": "ns",
            "range": "± 351317.8553792172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21268507.958333332,
            "unit": "ns",
            "range": "± 551548.2448125285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57129065.692307696,
            "unit": "ns",
            "range": "± 1555772.2873560581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109839079.52777778,
            "unit": "ns",
            "range": "± 3545969.8506557676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229785060.9,
            "unit": "ns",
            "range": "± 3997290.12931473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79198.59770114943,
            "unit": "ns",
            "range": "± 5767.461761770339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310369.2696629214,
            "unit": "ns",
            "range": "± 23239.414360855706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306164.2555555556,
            "unit": "ns",
            "range": "± 34090.09815957506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288832.9366197183,
            "unit": "ns",
            "range": "± 13722.680048250044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210401.433333334,
            "unit": "ns",
            "range": "± 47757.14066648144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763838.2586206896,
            "unit": "ns",
            "range": "± 98980.91329308147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21359.04081632653,
            "unit": "ns",
            "range": "± 3896.6152750059423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103450.8870967742,
            "unit": "ns",
            "range": "± 19674.003660222297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104233.44444444444,
            "unit": "ns",
            "range": "± 15189.5837383039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101622.15789473684,
            "unit": "ns",
            "range": "± 15829.719662788206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6809.268421052631,
            "unit": "ns",
            "range": "± 853.3336686525331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18967.70930232558,
            "unit": "ns",
            "range": "± 2317.4755426910706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650528.2323232323,
            "unit": "ns",
            "range": "± 209782.54259788452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3090552.857894737,
            "unit": "ns",
            "range": "± 255799.73295541576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2116765.969072165,
            "unit": "ns",
            "range": "± 262945.939134575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6060386.47979798,
            "unit": "ns",
            "range": "± 546161.3335128087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384188.3645833335,
            "unit": "ns",
            "range": "± 230815.28974777623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3678357.3854166665,
            "unit": "ns",
            "range": "± 269205.2290265539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4446291.361538461,
            "unit": "ns",
            "range": "± 201535.05465061756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4008152.9696969697,
            "unit": "ns",
            "range": "± 289824.3721084376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6934520.554347826,
            "unit": "ns",
            "range": "± 498042.82299468335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5771013.649553572,
            "unit": "ns",
            "range": "± 73984.34552650261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1730138.162109375,
            "unit": "ns",
            "range": "± 18433.15819450201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052376.2372395834,
            "unit": "ns",
            "range": "± 13075.269405970606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981306.8849431816,
            "unit": "ns",
            "range": "± 71559.53023327596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892430.2309027778,
            "unit": "ns",
            "range": "± 18547.434731319117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746601.23828125,
            "unit": "ns",
            "range": "± 7680.927970320608"
          }
        ]
      }
    ]
  }
}