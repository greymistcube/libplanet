window.BENCHMARK_DATA = {
  "lastUpdate": 1682674301460,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682502051616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9073981.315789474,
            "unit": "ns",
            "range": "± 393997.67423004436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22200116.730769232,
            "unit": "ns",
            "range": "± 1095550.420762374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59477547.01282051,
            "unit": "ns",
            "range": "± 3056208.352038921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118491147.5,
            "unit": "ns",
            "range": "± 4522942.930594115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237393012.58064517,
            "unit": "ns",
            "range": "± 7127575.297606697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67105.55670103093,
            "unit": "ns",
            "range": "± 18589.089504424963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640275.46875,
            "unit": "ns",
            "range": "± 178753.1601974282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3390049.2842105264,
            "unit": "ns",
            "range": "± 295283.57629630074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2660653.2083333335,
            "unit": "ns",
            "range": "± 246246.50504894336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7291117.989690722,
            "unit": "ns",
            "range": "± 538689.0728827734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6356530.422309028,
            "unit": "ns",
            "range": "± 209490.7870702922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035301.4102783203,
            "unit": "ns",
            "range": "± 62020.3681949871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465845.7472098214,
            "unit": "ns",
            "range": "± 21742.593775063313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2812311.97453125,
            "unit": "ns",
            "range": "± 73684.24984217033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935754.2483552631,
            "unit": "ns",
            "range": "± 20728.935896354884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845283.9391961349,
            "unit": "ns",
            "range": "± 18754.23723127973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364280.0202020202,
            "unit": "ns",
            "range": "± 52687.642880137406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337430.5612244898,
            "unit": "ns",
            "range": "± 47586.05516326572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298597.8762886598,
            "unit": "ns",
            "range": "± 41565.246874456745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4892322.275510204,
            "unit": "ns",
            "range": "± 326359.23403392767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4314276.479166667,
            "unit": "ns",
            "range": "± 281995.21298337035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22991.12,
            "unit": "ns",
            "range": "± 9134.58580582833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105155.93478260869,
            "unit": "ns",
            "range": "± 18458.986972790088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88063.63440860216,
            "unit": "ns",
            "range": "± 13769.219071652213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110871.83870967742,
            "unit": "ns",
            "range": "± 22507.323623699987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5294.597826086957,
            "unit": "ns",
            "range": "± 466.7883973572072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31059.94845360825,
            "unit": "ns",
            "range": "± 10633.886683000652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601918.3191489363,
            "unit": "ns",
            "range": "± 240557.97946062114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745632.053763441,
            "unit": "ns",
            "range": "± 236604.7920712827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855493.4387755105,
            "unit": "ns",
            "range": "± 305970.38575932913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793192.642857143,
            "unit": "ns",
            "range": "± 374443.7083020006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022598.357894737,
            "unit": "ns",
            "range": "± 583661.4359230017"
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
          "id": "7c5826ddffe796f0bf864a730a00e2033503021f",
          "message": "Simplified JSON serialization",
          "timestamp": "2023-04-27T11:25:31+09:00",
          "tree_id": "5a71e80f98801528503d3c2898074ec13f4284ad",
          "url": "https://github.com/greymistcube/libplanet/commit/7c5826ddffe796f0bf864a730a00e2033503021f"
        },
        "date": 1682563740908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292542.6666666667,
            "unit": "ns",
            "range": "± 8145.284473475813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278442.93617021275,
            "unit": "ns",
            "range": "± 10749.849045258132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243771.45762711865,
            "unit": "ns",
            "range": "± 10457.838232343396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271034.133333334,
            "unit": "ns",
            "range": "± 33960.39117616426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894304.785714286,
            "unit": "ns",
            "range": "± 25514.190926675634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20065.541666666668,
            "unit": "ns",
            "range": "± 1890.704184698148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91598.41666666667,
            "unit": "ns",
            "range": "± 6771.165499717267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76452.625,
            "unit": "ns",
            "range": "± 5370.539310858238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93389.09278350516,
            "unit": "ns",
            "range": "± 11066.147382786456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5665.422680412371,
            "unit": "ns",
            "range": "± 659.789515600928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19822.556701030928,
            "unit": "ns",
            "range": "± 1777.9648300390168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315364.7,
            "unit": "ns",
            "range": "± 59064.679589056395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505839.272727273,
            "unit": "ns",
            "range": "± 109485.2737738256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4302087.2,
            "unit": "ns",
            "range": "± 72746.74189778438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4340439.342105263,
            "unit": "ns",
            "range": "± 136872.55409563886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6772264.333333333,
            "unit": "ns",
            "range": "± 126823.12836573062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095257.6203125,
            "unit": "ns",
            "range": "± 28321.08678658945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986934.1963541666,
            "unit": "ns",
            "range": "± 3230.0503115041133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362903.9658854166,
            "unit": "ns",
            "range": "± 1133.9551829208376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565707.8303571427,
            "unit": "ns",
            "range": "± 1758.6103061746524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816214.9491536458,
            "unit": "ns",
            "range": "± 445.570153228389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738618.703125,
            "unit": "ns",
            "range": "± 276.1279949843157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46722.52173913043,
            "unit": "ns",
            "range": "± 2839.4090140331605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7618473.2,
            "unit": "ns",
            "range": "± 69329.01159502317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19461790.8,
            "unit": "ns",
            "range": "± 128442.24982747248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50121626.86666667,
            "unit": "ns",
            "range": "± 212703.8532832736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100336436.64285715,
            "unit": "ns",
            "range": "± 473558.77682592114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200119677.53333333,
            "unit": "ns",
            "range": "± 853880.5570196125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445966.17,
            "unit": "ns",
            "range": "± 122663.09798910157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683085.121212121,
            "unit": "ns",
            "range": "± 84498.24931128662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279527.595744681,
            "unit": "ns",
            "range": "± 129162.69957595653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5403767.038461538,
            "unit": "ns",
            "range": "± 137267.4464270333"
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
          "id": "02d952425f3d96a08ff88962bd1b44837d803de6",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:37:14+09:00",
          "tree_id": "410ed249ccab831d6b47f5153120ca037b791f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/02d952425f3d96a08ff88962bd1b44837d803de6"
        },
        "date": 1682574831025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339321.1967213115,
            "unit": "ns",
            "range": "± 15241.318226911642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329657.2549019608,
            "unit": "ns",
            "range": "± 13475.200375271808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278853.1692307692,
            "unit": "ns",
            "range": "± 12934.482166829812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5028812.612903226,
            "unit": "ns",
            "range": "± 152788.8000680847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4677225.333333333,
            "unit": "ns",
            "range": "± 95747.20504844116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24364.186813186814,
            "unit": "ns",
            "range": "± 2299.9577914585398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109321.47422680413,
            "unit": "ns",
            "range": "± 7866.156620682024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98335.67368421053,
            "unit": "ns",
            "range": "± 6142.595422135892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117923.73469387754,
            "unit": "ns",
            "range": "± 15183.67492057952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8378.410526315789,
            "unit": "ns",
            "range": "± 833.0996274454335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23595.270833333332,
            "unit": "ns",
            "range": "± 1993.642260466832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4141489,
            "unit": "ns",
            "range": "± 83072.8482387597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4242673.080645162,
            "unit": "ns",
            "range": "± 191342.67152760577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4986092.387096774,
            "unit": "ns",
            "range": "± 149115.4033770885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5370391.9,
            "unit": "ns",
            "range": "± 145744.34783110386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8116722.555555556,
            "unit": "ns",
            "range": "± 222824.23907340295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7009291.657291667,
            "unit": "ns",
            "range": "± 48726.98956214612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203131.493359375,
            "unit": "ns",
            "range": "± 3620.905057257762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1605372.511328125,
            "unit": "ns",
            "range": "± 4712.724566988185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168719.829947917,
            "unit": "ns",
            "range": "± 6256.6069487822715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991760.9596354166,
            "unit": "ns",
            "range": "± 3011.360255346335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910244.2831380208,
            "unit": "ns",
            "range": "± 1696.530534287363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57540.87777777778,
            "unit": "ns",
            "range": "± 4250.204816816936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10240167.304347826,
            "unit": "ns",
            "range": "± 231841.992021101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27901167.766666666,
            "unit": "ns",
            "range": "± 353025.7734386029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64046443.44444445,
            "unit": "ns",
            "range": "± 1129435.599355673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135641452.26666668,
            "unit": "ns",
            "range": "± 2067125.2025654742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256542394.06666666,
            "unit": "ns",
            "range": "± 4400259.78661719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737938.5625,
            "unit": "ns",
            "range": "± 123041.65458325698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239253.344262295,
            "unit": "ns",
            "range": "± 145956.20003707564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2767397.0140845072,
            "unit": "ns",
            "range": "± 135268.41010033063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6287455.733333333,
            "unit": "ns",
            "range": "± 114928.08398700385"
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
          "id": "b2b216263f442f9fca4808241970d8cb5b817e86",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:38:58+09:00",
          "tree_id": "d0ab92b60b7e688c2dc495c16f76f9c9f033b744",
          "url": "https://github.com/greymistcube/libplanet/commit/b2b216263f442f9fca4808241970d8cb5b817e86"
        },
        "date": 1682575009926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329976.56842105265,
            "unit": "ns",
            "range": "± 37594.73531206329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295291.93548387097,
            "unit": "ns",
            "range": "± 25945.21640914817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269269.59722222225,
            "unit": "ns",
            "range": "± 13206.595469912283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4674121.946236559,
            "unit": "ns",
            "range": "± 270392.938463169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4134031.227272727,
            "unit": "ns",
            "range": "± 226606.72062741424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25512.23232323232,
            "unit": "ns",
            "range": "± 6397.956463970579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92717.84536082474,
            "unit": "ns",
            "range": "± 12182.36393516276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83290.9693877551,
            "unit": "ns",
            "range": "± 9612.76044807333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98421.94680851063,
            "unit": "ns",
            "range": "± 12438.476718761092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11575.848484848484,
            "unit": "ns",
            "range": "± 6079.0161518759005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21718.2,
            "unit": "ns",
            "range": "± 7418.77123425858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393714.3711340204,
            "unit": "ns",
            "range": "± 220692.55137140254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620261.948979592,
            "unit": "ns",
            "range": "± 306104.3860793199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539481.6736842105,
            "unit": "ns",
            "range": "± 284733.5461671193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479395.105263158,
            "unit": "ns",
            "range": "± 319180.9973126524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7711164.12371134,
            "unit": "ns",
            "range": "± 563901.4683771458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6496149.656939338,
            "unit": "ns",
            "range": "± 205122.33386993074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2057872.4308997844,
            "unit": "ns",
            "range": "± 89773.04569927354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1479752.04703125,
            "unit": "ns",
            "range": "± 59362.075937276895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2878570.0950195314,
            "unit": "ns",
            "range": "± 102091.61843564014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999438.4851140203,
            "unit": "ns",
            "range": "± 33737.552800549194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829713.673828125,
            "unit": "ns",
            "range": "± 4232.0836879487715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55957.58762886598,
            "unit": "ns",
            "range": "± 9882.956210222663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8077814.30952381,
            "unit": "ns",
            "range": "± 256402.94745428208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21956686.4,
            "unit": "ns",
            "range": "± 1629182.7518864372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54021707.084337346,
            "unit": "ns",
            "range": "± 2882439.381635886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105548474.8095238,
            "unit": "ns",
            "range": "± 2407139.653583494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219796226.70149255,
            "unit": "ns",
            "range": "± 10330195.607304994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569908.7040816327,
            "unit": "ns",
            "range": "± 175963.39745199762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2916516.9583333335,
            "unit": "ns",
            "range": "± 224534.46532006323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2481227.612244898,
            "unit": "ns",
            "range": "± 293128.90761861607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6449953.340206185,
            "unit": "ns",
            "range": "± 501054.9637123757"
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
          "id": "3b41d96394fdabaa4492532c4ed143bbca2f4384",
          "message": "Fix ts tests",
          "timestamp": "2023-04-28T17:23:49+09:00",
          "tree_id": "14bc447b7bce10597997c252b35de7100d185be3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b41d96394fdabaa4492532c4ed143bbca2f4384"
        },
        "date": 1682671046094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283838.62,
            "unit": "ns",
            "range": "± 11414.133497805004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276205.6785714286,
            "unit": "ns",
            "range": "± 5485.784876175146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244271.1724137931,
            "unit": "ns",
            "range": "± 10379.00098315577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278672.333333333,
            "unit": "ns",
            "range": "± 24979.17608919954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879859.3571428573,
            "unit": "ns",
            "range": "± 20691.715445883325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19903.0625,
            "unit": "ns",
            "range": "± 1762.0159077631865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88606.92708333333,
            "unit": "ns",
            "range": "± 6298.643486781464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73699.59090909091,
            "unit": "ns",
            "range": "± 1722.8811046807034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88395.14444444445,
            "unit": "ns",
            "range": "± 8406.849344448232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6008.226804123711,
            "unit": "ns",
            "range": "± 657.4480097498621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18483.406593406595,
            "unit": "ns",
            "range": "± 1440.047661078711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328310.2666666666,
            "unit": "ns",
            "range": "± 42337.10214873451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490089.3333333335,
            "unit": "ns",
            "range": "± 49668.21590984184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4257150.285714285,
            "unit": "ns",
            "range": "± 40060.849352393474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179098.709677419,
            "unit": "ns",
            "range": "± 125716.71755424139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6747586.038461538,
            "unit": "ns",
            "range": "± 181263.6534332199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5936989.059709822,
            "unit": "ns",
            "range": "± 16180.112308989716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925061.4229166666,
            "unit": "ns",
            "range": "± 2952.62481924488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345308.00390625,
            "unit": "ns",
            "range": "± 666.3423696641873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555214.0262276786,
            "unit": "ns",
            "range": "± 1402.1067789927843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808717.1749348958,
            "unit": "ns",
            "range": "± 1077.144199139447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731303.5817057291,
            "unit": "ns",
            "range": "± 421.1334929187392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45246.24418604651,
            "unit": "ns",
            "range": "± 2467.946776697759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7702512.571428572,
            "unit": "ns",
            "range": "± 89721.96206805031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19610732,
            "unit": "ns",
            "range": "± 66933.30799812175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50408876.6,
            "unit": "ns",
            "range": "± 387432.73422507074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99830076.86666666,
            "unit": "ns",
            "range": "± 432287.1123618235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199460265.13333333,
            "unit": "ns",
            "range": "± 764502.1563117182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405408.6494845361,
            "unit": "ns",
            "range": "± 109687.33122959867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587728.409090909,
            "unit": "ns",
            "range": "± 60960.83976710286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2229911.0625,
            "unit": "ns",
            "range": "± 144754.61799551552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5316129.814814814,
            "unit": "ns",
            "range": "± 147923.64162011663"
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
          "id": "979e41c7df359212c0377fbd0c31f1b964e4b4ba",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:33:10+09:00",
          "tree_id": "8610bb5a528524d6c08047e0f2796178a8391232",
          "url": "https://github.com/greymistcube/libplanet/commit/979e41c7df359212c0377fbd0c31f1b964e4b4ba"
        },
        "date": 1682671601771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286839.475,
            "unit": "ns",
            "range": "± 10045.805385608106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276072.60975609755,
            "unit": "ns",
            "range": "± 9823.460680630957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229837.5,
            "unit": "ns",
            "range": "± 2548.6551431022476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4272585.6,
            "unit": "ns",
            "range": "± 56030.79479281269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3916718.3333333335,
            "unit": "ns",
            "range": "± 33914.13127858286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20140.105263157893,
            "unit": "ns",
            "range": "± 1740.6137611192025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87923.83157894737,
            "unit": "ns",
            "range": "± 5280.3643786515895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77430.45,
            "unit": "ns",
            "range": "± 2744.7980164817322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88693.69767441861,
            "unit": "ns",
            "range": "± 6509.183415072383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6506.216494845361,
            "unit": "ns",
            "range": "± 866.1159375193863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20894.436842105264,
            "unit": "ns",
            "range": "± 2008.8707095986886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3233752.379310345,
            "unit": "ns",
            "range": "± 54031.10495380931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480426.6744186045,
            "unit": "ns",
            "range": "± 122480.89264408336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4141232,
            "unit": "ns",
            "range": "± 71281.68087844971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4354343.576271187,
            "unit": "ns",
            "range": "± 186138.0567981551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6594616.038461538,
            "unit": "ns",
            "range": "± 162054.88577206942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5894413.496995192,
            "unit": "ns",
            "range": "± 18836.755294191462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832734.6233072917,
            "unit": "ns",
            "range": "± 6257.709362547839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327378.06640625,
            "unit": "ns",
            "range": "± 6662.004092302966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627070.9010416665,
            "unit": "ns",
            "range": "± 6895.949426316143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825341.1663411459,
            "unit": "ns",
            "range": "± 1337.3321423601906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791544.2158854167,
            "unit": "ns",
            "range": "± 1872.8272037383817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50137.1724137931,
            "unit": "ns",
            "range": "± 2573.945998814184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7768971.357142857,
            "unit": "ns",
            "range": "± 106324.75061925728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22128849.333333332,
            "unit": "ns",
            "range": "± 217287.3028387816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53850778.13333333,
            "unit": "ns",
            "range": "± 671239.8544772913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104020713.8,
            "unit": "ns",
            "range": "± 1513115.7917240646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207224954.66666666,
            "unit": "ns",
            "range": "± 3691302.515202859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1450301.0808080807,
            "unit": "ns",
            "range": "± 110491.85187971886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642211.1428571427,
            "unit": "ns",
            "range": "± 45732.26040748502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324416.777777778,
            "unit": "ns",
            "range": "± 129196.494023532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5424343.342857143,
            "unit": "ns",
            "range": "± 175264.32290852827"
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
          "id": "f968d0d2810ed3d7da353c446b7a06b2c8d87765",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:44:43+09:00",
          "tree_id": "127ee6961fcd950dd8c6c5f5f420c747bde944c0",
          "url": "https://github.com/greymistcube/libplanet/commit/f968d0d2810ed3d7da353c446b7a06b2c8d87765"
        },
        "date": 1682672405051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321745.0731707317,
            "unit": "ns",
            "range": "± 11395.465337997926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315803.7272727273,
            "unit": "ns",
            "range": "± 9429.129162708794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268602.1538461539,
            "unit": "ns",
            "range": "± 1402.7445625245916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5048682.2,
            "unit": "ns",
            "range": "± 74315.59556397682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4603122,
            "unit": "ns",
            "range": "± 74419.89604937648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20134.74193548387,
            "unit": "ns",
            "range": "± 1261.6353251032515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97417.92105263157,
            "unit": "ns",
            "range": "± 4933.871479918267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84509.37037037036,
            "unit": "ns",
            "range": "± 1694.1293917559533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103848.5612244898,
            "unit": "ns",
            "range": "± 13697.843303089969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6261.917525773196,
            "unit": "ns",
            "range": "± 633.5295420318992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19787.154761904763,
            "unit": "ns",
            "range": "± 1082.4868790105786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3877646.3571428573,
            "unit": "ns",
            "range": "± 164350.87354575258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4283690.714285715,
            "unit": "ns",
            "range": "± 68170.30734003746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4967871.222222222,
            "unit": "ns",
            "range": "± 101310.95477120722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5050195.454545454,
            "unit": "ns",
            "range": "± 119565.87717107382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7829090.172413793,
            "unit": "ns",
            "range": "± 201110.52528825842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7045683.221454327,
            "unit": "ns",
            "range": "± 26908.580986170546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2148314.4518229165,
            "unit": "ns",
            "range": "± 15766.392281817338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1581721.1139322917,
            "unit": "ns",
            "range": "± 9779.628989455226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3033737.113541667,
            "unit": "ns",
            "range": "± 16590.22718574557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978128.6863932292,
            "unit": "ns",
            "range": "± 5639.862065207576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893449.2972005209,
            "unit": "ns",
            "range": "± 4147.826042461637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54654.78409090909,
            "unit": "ns",
            "range": "± 3018.968577956141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9609200.4,
            "unit": "ns",
            "range": "± 85535.90995499243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25419025.733333334,
            "unit": "ns",
            "range": "± 320604.31912794814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59685003.06666667,
            "unit": "ns",
            "range": "± 996409.1695895148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121149435.93333334,
            "unit": "ns",
            "range": "± 2070729.8730734834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261931809.23076922,
            "unit": "ns",
            "range": "± 2615866.463807456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622103.517647059,
            "unit": "ns",
            "range": "± 84676.62271388042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100257.8421052634,
            "unit": "ns",
            "range": "± 67537.45272749136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2548939.2898550723,
            "unit": "ns",
            "range": "± 118324.22231870581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6079822.833333333,
            "unit": "ns",
            "range": "± 82211.24802254398"
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
          "id": "accd7994dff96146b8932106afcf5eff0a4d3fc1",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:50:03+09:00",
          "tree_id": "9f67cb987aa229965a42d7cbc3c169fd5e49dd8d",
          "url": "https://github.com/greymistcube/libplanet/commit/accd7994dff96146b8932106afcf5eff0a4d3fc1"
        },
        "date": 1682672652503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293244.7894736842,
            "unit": "ns",
            "range": "± 10044.813708624331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280632.3404255319,
            "unit": "ns",
            "range": "± 9626.88801646675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232226.3076923077,
            "unit": "ns",
            "range": "± 2988.3348313237198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4342763.071428572,
            "unit": "ns",
            "range": "± 45901.5081811284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930118.8,
            "unit": "ns",
            "range": "± 52785.84155434107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22685.147368421054,
            "unit": "ns",
            "range": "± 2267.9503398463025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93119.36458333333,
            "unit": "ns",
            "range": "± 6741.0334099528745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84274.96808510639,
            "unit": "ns",
            "range": "± 5959.630818565371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111833.38541666667,
            "unit": "ns",
            "range": "± 13905.740072184346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7275.422680412371,
            "unit": "ns",
            "range": "± 1134.362998880976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22122.25,
            "unit": "ns",
            "range": "± 2390.298616006839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415472.1142857145,
            "unit": "ns",
            "range": "± 111926.29655656844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3611861.3191489363,
            "unit": "ns",
            "range": "± 137691.72262799783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4189152.6,
            "unit": "ns",
            "range": "± 61627.269479856535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4503404.487179487,
            "unit": "ns",
            "range": "± 153758.7589889934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7016568.204545454,
            "unit": "ns",
            "range": "± 259068.80647045668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6144832.8921875,
            "unit": "ns",
            "range": "± 33999.97375332913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874120.8864583333,
            "unit": "ns",
            "range": "± 1953.7818493052193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378438.7006510417,
            "unit": "ns",
            "range": "± 3749.58222351825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713959.17109375,
            "unit": "ns",
            "range": "± 3487.0010332626043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835066.1556640625,
            "unit": "ns",
            "range": "± 368.1078134832774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747287.3184291294,
            "unit": "ns",
            "range": "± 432.20686080063496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52572.37362637363,
            "unit": "ns",
            "range": "± 3520.49212989179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7862495.933333334,
            "unit": "ns",
            "range": "± 133587.2388775358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22069273.866666667,
            "unit": "ns",
            "range": "± 399066.34429894463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54835534,
            "unit": "ns",
            "range": "± 629468.6862137896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107625503.86666666,
            "unit": "ns",
            "range": "± 1415041.2550158019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216299448.8,
            "unit": "ns",
            "range": "± 2996222.459765396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549632.247311828,
            "unit": "ns",
            "range": "± 114386.81666776037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2798863.972972973,
            "unit": "ns",
            "range": "± 93847.02586227063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2417503.904109589,
            "unit": "ns",
            "range": "± 111139.74702425626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5801524.90625,
            "unit": "ns",
            "range": "± 180045.010577796"
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
          "id": "1a0f6e374ec8615c5942618ff3cb376d9c3d2c0e",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:59:02+09:00",
          "tree_id": "fdf46e68a57d060947ec961a30142d0b536ccb4a",
          "url": "https://github.com/greymistcube/libplanet/commit/1a0f6e374ec8615c5942618ff3cb376d9c3d2c0e"
        },
        "date": 1682673304620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324494.9,
            "unit": "ns",
            "range": "± 14381.573572822568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315370.4,
            "unit": "ns",
            "range": "± 11240.899497735125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264616.0138888889,
            "unit": "ns",
            "range": "± 12979.52333647341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4905539.9,
            "unit": "ns",
            "range": "± 142996.30543632212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4423166.5,
            "unit": "ns",
            "range": "± 114822.08511696996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22169.612903225807,
            "unit": "ns",
            "range": "± 1589.1610175912624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102435.58585858585,
            "unit": "ns",
            "range": "± 9293.831396179638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84933.64210526316,
            "unit": "ns",
            "range": "± 5758.62563190394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104347.08333333333,
            "unit": "ns",
            "range": "± 13490.61539750907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6784.642857142857,
            "unit": "ns",
            "range": "± 875.652404793488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19738.647368421054,
            "unit": "ns",
            "range": "± 1428.5730789432157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3942856.59375,
            "unit": "ns",
            "range": "± 119739.23929909698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4103120.119047619,
            "unit": "ns",
            "range": "± 144060.93853562794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4822635.740740741,
            "unit": "ns",
            "range": "± 126079.68105637147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4837802,
            "unit": "ns",
            "range": "± 194364.99821653662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7669745.5,
            "unit": "ns",
            "range": "± 186655.94510469944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6695841.490104167,
            "unit": "ns",
            "range": "± 42953.13083462885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2134426.392020089,
            "unit": "ns",
            "range": "± 9873.902124602666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1569455.1049479167,
            "unit": "ns",
            "range": "± 14360.507772577495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981615.744698661,
            "unit": "ns",
            "range": "± 17035.028525625377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961428.6097005209,
            "unit": "ns",
            "range": "± 8978.165592490957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875776.6197684152,
            "unit": "ns",
            "range": "± 4037.1874070422245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54284.84782608696,
            "unit": "ns",
            "range": "± 3821.8796305816018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8966754.133333333,
            "unit": "ns",
            "range": "± 121971.43922473154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29156886.733333334,
            "unit": "ns",
            "range": "± 368955.79859293764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64671741.666666664,
            "unit": "ns",
            "range": "± 593088.0633955114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124229623.66666667,
            "unit": "ns",
            "range": "± 1510250.0491116724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286823718.53333336,
            "unit": "ns",
            "range": "± 3914091.362554677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601140.6649484537,
            "unit": "ns",
            "range": "± 113251.30644065072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3079175.9836065574,
            "unit": "ns",
            "range": "± 132339.18210108095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2543654.314285714,
            "unit": "ns",
            "range": "± 123092.18508159101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6064249.607142857,
            "unit": "ns",
            "range": "± 168153.2630159582"
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
          "id": "a0c482a631acb0b32fb582c3f52edfa01ca5dfa3",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:16:25+09:00",
          "tree_id": "d78939a65a4ffebdcf9d16fd2c60c156db1e8e74",
          "url": "https://github.com/greymistcube/libplanet/commit/a0c482a631acb0b32fb582c3f52edfa01ca5dfa3"
        },
        "date": 1682674178805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284333.88636363635,
            "unit": "ns",
            "range": "± 10487.919469596434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275680.6666666667,
            "unit": "ns",
            "range": "± 9901.632298710236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239509.42424242425,
            "unit": "ns",
            "range": "± 7429.5480937196935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259645.933333334,
            "unit": "ns",
            "range": "± 59622.83170357125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867062.5714285714,
            "unit": "ns",
            "range": "± 34321.10190474723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20803.927083333332,
            "unit": "ns",
            "range": "± 1738.0698383690583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85062.7027027027,
            "unit": "ns",
            "range": "± 4159.2434102874995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73114.84615384616,
            "unit": "ns",
            "range": "± 977.9545700213487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91119.96875,
            "unit": "ns",
            "range": "± 10213.66731544513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5579.9473684210525,
            "unit": "ns",
            "range": "± 585.9417291560701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19364.073684210525,
            "unit": "ns",
            "range": "± 1818.9563189525907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294209.0416666665,
            "unit": "ns",
            "range": "± 118999.79305541782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329643,
            "unit": "ns",
            "range": "± 46918.0887160723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4268017.066666666,
            "unit": "ns",
            "range": "± 73992.20102190951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371855.714285715,
            "unit": "ns",
            "range": "± 67864.1414687956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6672305.666666667,
            "unit": "ns",
            "range": "± 137420.327965814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921346.521205357,
            "unit": "ns",
            "range": "± 23286.45422456576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845744.2903180805,
            "unit": "ns",
            "range": "± 1977.489900009538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341786.1122395834,
            "unit": "ns",
            "range": "± 513.5889678539417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536431.3341346155,
            "unit": "ns",
            "range": "± 1374.1787154718286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795549.039438101,
            "unit": "ns",
            "range": "± 883.4393915940839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739882.405874399,
            "unit": "ns",
            "range": "± 282.1382316374857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47156.77528089887,
            "unit": "ns",
            "range": "± 3763.0152977028483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7754786.384615385,
            "unit": "ns",
            "range": "± 42600.3734520768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19588015.466666665,
            "unit": "ns",
            "range": "± 98099.75464427353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49943020.6,
            "unit": "ns",
            "range": "± 238326.0003131365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100239165.85714285,
            "unit": "ns",
            "range": "± 282648.11190128734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199817779.2142857,
            "unit": "ns",
            "range": "± 987198.3837326391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389022.587628866,
            "unit": "ns",
            "range": "± 83716.47409905758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615026.3333333335,
            "unit": "ns",
            "range": "± 76076.71752923484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196616.285714286,
            "unit": "ns",
            "range": "± 65587.14879167906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5361898.545454546,
            "unit": "ns",
            "range": "± 168590.7948202709"
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
          "id": "96d0699e4e3011bb85f881195d1c7bbd6aa7e318",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:18:26+09:00",
          "tree_id": "6b6ef1d28313ee888b115e67bf374a313efc8cf9",
          "url": "https://github.com/greymistcube/libplanet/commit/96d0699e4e3011bb85f881195d1c7bbd6aa7e318"
        },
        "date": 1682674293559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290941.98076923075,
            "unit": "ns",
            "range": "± 12004.611392539846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284087.9024390244,
            "unit": "ns",
            "range": "± 9943.371955239527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250447.86842105264,
            "unit": "ns",
            "range": "± 8497.338699982427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4261737.6,
            "unit": "ns",
            "range": "± 22407.184354258217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891589.0714285714,
            "unit": "ns",
            "range": "± 20840.054250129764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20273,
            "unit": "ns",
            "range": "± 1630.029096110455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91194.1836734694,
            "unit": "ns",
            "range": "± 5654.199018714839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76839.984375,
            "unit": "ns",
            "range": "± 3426.2676277393803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91644.62886597938,
            "unit": "ns",
            "range": "± 10557.927744432525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5930.15625,
            "unit": "ns",
            "range": "± 479.63146659701135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18842.59375,
            "unit": "ns",
            "range": "± 1444.711390432268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297948.346153846,
            "unit": "ns",
            "range": "± 65918.47708734922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525033.533333333,
            "unit": "ns",
            "range": "± 62818.49923375241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4304774.071428572,
            "unit": "ns",
            "range": "± 48824.961227231506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4427132.555555556,
            "unit": "ns",
            "range": "± 120090.99121189903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6775247.958333333,
            "unit": "ns",
            "range": "± 170407.8809466784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5912262.644270834,
            "unit": "ns",
            "range": "± 9003.589869062283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831738.8901742788,
            "unit": "ns",
            "range": "± 3190.4935162674856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355351.615234375,
            "unit": "ns",
            "range": "± 398.3199793948126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618167.0190104167,
            "unit": "ns",
            "range": "± 2599.9563713902285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811761.6625976562,
            "unit": "ns",
            "range": "± 212.71037846390664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727992.3257161458,
            "unit": "ns",
            "range": "± 609.3132206072366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48218.54761904762,
            "unit": "ns",
            "range": "± 2579.772906811209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703868.266666667,
            "unit": "ns",
            "range": "± 79662.8690199847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19801409.533333335,
            "unit": "ns",
            "range": "± 176460.51886950588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50071940.333333336,
            "unit": "ns",
            "range": "± 186531.721423564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100142304.4,
            "unit": "ns",
            "range": "± 536526.4988325767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201139645.57142857,
            "unit": "ns",
            "range": "± 371892.864446555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412475.05,
            "unit": "ns",
            "range": "± 106228.90824553304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2607098.388888889,
            "unit": "ns",
            "range": "± 54197.94013248636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221040.01754386,
            "unit": "ns",
            "range": "± 96535.76884973985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5324280.578947368,
            "unit": "ns",
            "range": "± 115152.74159679095"
          }
        ]
      }
    ]
  }
}